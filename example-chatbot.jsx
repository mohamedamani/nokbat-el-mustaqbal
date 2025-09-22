// واجهة دردشة تعليمية ذكية (نموذج أولي، بدون ذكاء اصطناعي فعلي)
import React, { useState } from "react";

const ExampleChatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "مرحبًا بك في مساعد الدراسة الذكي! ما الدرس الذي تريد أن تتعلمه اليوم؟" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    // إضافة رسالة الطالب
    setMessages([...messages, { from: "user", text: input }]);
    // رد وهمي من الروبوت
    setTimeout(() => {
      setMessages(msgs => [...msgs, {
        from: "bot",
        text: "شكرًا لسؤالك! سأشرح لك الدرس بطريقة بسيطة: ..." // هنا سيتم لاحقًا ربط الذكاء الاصطناعي.
      }]);
    }, 500);
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="font-bold mb-2">مساعد الدراسة الذكي (نموذج أولي)</h2>
      <div className="h-48 overflow-y-auto bg-gray-50 p-2 mb-2 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.from === "bot" ? "text-right text-blue-700" : "text-left text-green-800"}>
            <span>{msg.from === "bot" ? "🤖" : "👦"} {msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="اكتب سؤالك..."
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={handleSend}>
          إرسال
        </button>
      </div>
    </div>
  );
};

export default ExampleChatbot;
