"use client"
import Chat from "../components/Chat";

export default function GenerateImageEndPoint() {
  return <Chat apiEndpoint="/api/image" modelType="image-generation" />;
}
