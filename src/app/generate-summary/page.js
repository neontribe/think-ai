"use client"
import Chat from "../components/Chat";

export default function SummariseEndPoint() {
  return <Chat apiEndpoint="/api/summary" modelType="summary" />
}
