"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import Link

export default function CameraPage() {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        let mounted = true;

        async function setupCamera() {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "environment" },
                    audio: false,
                });
                if (mounted) {
                    setStream(mediaStream);
                    if (videoRef.current) {
                        videoRef.current.srcObject = mediaStream;
                    }
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
                if (mounted) setError("Could not access camera. Please allow permissions.");
            }
        }

        setupCamera();

        return () => {
            mounted = false;
            if (stream) {
                stream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    const takePhoto = () => {
        console.log("Attempting to take photo...");
        try {
            if (!videoRef.current) {
                console.error("Video ref is missing");
                alert("Camera error: Video stream not found.");
                return;
            }
            if (!canvasRef.current) {
                console.error("Canvas ref is missing");
                alert("Camera error: Canvas not found.");
                return;
            }

            const video = videoRef.current;
            const canvas = canvasRef.current;

            console.log("Video dims:", video.videoWidth, video.videoHeight);

            if (video.videoWidth === 0 || video.videoHeight === 0) {
                alert("Camera is not ready yet. Please wait.");
                return;
            }

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const context = canvas.getContext("2d");
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL("image/jpeg");

                console.log("Image captured, size:", imageData.length);

                // Save to sessionStorage to pass to analysis page
                sessionStorage.setItem("capturedImage", imageData);

                // Stop stream
                if (stream) {
                    stream.getTracks().forEach(track => track.stop());
                }

                router.push("/analysis/loading");
            } else {
                alert("Could not create drawing context.");
            }
        } catch (e) {
            console.error("Take photo failed:", e);
            alert("Failed to take photo: " + String(e));
        }
    };

    return (
        <div style={{ background: "black", height: "100vh", width: "100%", overflow: "hidden" }}>
            <div className="camera-container">
                <div className="top-instruction">Position mole inside the circle</div>

                <div className="camera-view">
                    {error ? (
                        <div className="flex items-center justify-center h-full text-white p-4 text-center">
                            {error}
                        </div>
                    ) : (
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    )}
                    <canvas ref={canvasRef} style={{ display: "none" }} />

                    <div className="grid-lines"></div>
                    <div className="camera-overlay">
                        <div className="guideline-circle">
                            <div className="guideline-reticle"></div>
                            <div className="zoom-indicator">
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Optimal distance
                            </div>
                        </div>
                    </div>
                </div>

                <div className="camera-controls">
                    <svg
                        className="control-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        onClick={() => router.back()}
                    >
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>

                    <button className="shutter-btn" onClick={takePhoto}></button>

                    <svg
                        className="control-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M23 4v6h-6" />
                        <path d="M1 20v-6h6" />
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
