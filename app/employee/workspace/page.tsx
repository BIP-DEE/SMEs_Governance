"use client";

import { useState } from "react";
import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const conversations = [
  {
    id: "summary",
    title: "Weekly support summary",
    preview: "Internal update drafted from meeting notes.",
    time: "2 min ago",
    messages: [
      {
        role: "user",
        meta: "You • 10:14",
        content: "Summarise these meeting notes into three decisions, action items, and owners for an internal update.",
      },
      {
        role: "assistant",
        meta: "Approved AI workspace • 10:15",
        content:
          "Draft summary:\n\n1. Procurement will standardise supplier review templates by Friday.\n2. Legal requested tighter controls for contract clause drafting workflows.\n3. Operations will pilot a meeting-summary workflow with manager review enabled.\n\nAction items:\n- Nina Patel to finalise the procurement template rollout.\n- Sophie Turner to confirm legal review checkpoints.\n- Daniel Scott to configure the pilot workspace and logging.",
      },
    ],
  },
  {
    id: "reply",
    title: "Customer reply draft",
    preview: "Delayed shipment follow-up response.",
    time: "Today",
    messages: [
      {
        role: "user",
        meta: "You • 09:40",
        content: "Draft a calm customer reply for a delayed shipment and offer a next update by Friday.",
      },
      {
        role: "assistant",
        meta: "Approved AI workspace • 09:41",
        content:
          "Draft reply:\n\nThanks for your patience. We are finalising the shipment update and expect to provide a confirmed delivery date by Friday. We appreciate your understanding and will keep you informed as soon as the updated timing is confirmed.",
      },
    ],
  },
  {
    id: "ops",
    title: "Ops meeting actions",
    preview: "Action list and owners extracted.",
    time: "Yesterday",
    messages: [
      {
        role: "user",
        meta: "You • Yesterday",
        content: "Extract action items and owners from these operations meeting notes.",
      },
      {
        role: "assistant",
        meta: "Approved AI workspace • Yesterday",
        content: "Action list drafted with owners and dates. Review before sharing with the broader team.",
      },
    ],
  },
];

const templateCards = [
  {
    title: "Draft internal email",
    detail: "Turn rough notes into a concise internal update.",
  },
  {
    title: "Summarise meeting notes",
    detail: "Extract decisions, actions, and owners.",
  },
  {
    title: "Create customer reply",
    detail: "Prepare a calm response for approved support workflows.",
  },
];

export default function EmployeeWorkspacePage() {
  const [selectedConversationId, setSelectedConversationId] = useState("summary");
  const [activeTab, setActiveTab] = useState("chat");

  const selectedConversation =
    conversations.find((conversation) => conversation.id === selectedConversationId) ?? conversations[0];

  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="AI workspace"
          title="Work inside the approved assistant, not a public chatbot."
          description="Use the workspace for internal drafting and summarising. Choose a section and reveal only the detail you need."
          actions={
            <>
              <Button variant="secondary" href="/employee/policies">
                View guidance
              </Button>
              <Button>New chat</Button>
            </>
          }
          meta={<Badge tone="success">Logging on</Badge>}
        />

        <section className="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-[#bfdedf]/70">
              <Badge className="w-fit">Conversations</Badge>
              <CardTitle>Recent sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-5">
              {conversations.map((conversation) => {
                const active = selectedConversationId === conversation.id;

                return (
                  <button
                    type="button"
                    key={conversation.id}
                    onClick={() => setSelectedConversationId(conversation.id)}
                    className={cn(
                      "w-full rounded-[20px] border px-4 py-4 text-left transition",
                      active
                        ? "surface-card-strong border-[#9fd3d9]"
                        : "border-[#bfdedf]/70 bg-[rgba(241,250,249,0.66)] hover:-translate-y-[1px] hover:border-[#a5d6db] hover:bg-[rgba(245,252,251,0.84)]"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-950">{conversation.title}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-500">{conversation.preview}</div>
                      </div>
                      <div className="text-xs uppercase tracking-[0.14em] text-slate-500">{conversation.time}</div>
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          <Card className="surface-card-strong overflow-hidden">
            <CardHeader className="border-b border-[#bfdedf]/70">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-2">
                  <Badge tone="info" className="w-fit">
                    Active session
                  </Badge>
                  <CardTitle className="text-[1.35rem]">{selectedConversation.title}</CardTitle>
                </div>
                <Tabs
                  items={[
                    { id: "chat", label: "Chat" },
                    { id: "templates", label: "Templates" },
                    { id: "guidance", label: "Guidance" },
                  ]}
                  activeTab={activeTab}
                  onChange={setActiveTab}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5 pt-5">
              {activeTab === "chat" ? (
                <>
                  <div className="rounded-[20px] border border-sky-200/80 bg-[rgba(225,245,247,0.92)] px-4 py-3 text-sm leading-6 text-slate-700">
                    Keep prompts work-related, use approved data only, and review outputs before they leave the company.
                  </div>

                  <div className="space-y-4">
                    {selectedConversation.messages.map((message, index) => (
                      <div
                        key={`${message.role}-${index}`}
                        className={`max-w-3xl rounded-[24px] border px-4 py-4 ${
                          message.role === "assistant"
                            ? "border-[#bfdedf]/70 bg-[rgba(242,251,250,0.82)]"
                            : "ml-auto border-sky-200/80 bg-[rgba(226,246,247,0.9)]"
                        }`}
                      >
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-slate-950">
                            {message.role === "assistant" ? "AI Assistant" : "You"}
                          </p>
                          <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                            {message.meta}
                          </span>
                        </div>
                        <div className="whitespace-pre-line text-sm leading-7 text-slate-700">{message.content}</div>
                      </div>
                    ))}
                  </div>

                  <div className="surface-card-soft rounded-[24px] p-4">
                    <textarea
                      className="min-h-[150px] w-full rounded-[20px] border border-[#bfdedf]/80 bg-[rgba(244,252,251,0.86)] px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/90 focus:ring-4 focus:ring-cyan-500/12"
                      placeholder="Ask for help with an approved internal task."
                      defaultValue=""
                    />
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge tone="success">Logging on</Badge>
                        <Badge>Approved internal use</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="secondary">
                          Save
                        </Button>
                        <Button size="sm">Send</Button>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

              {activeTab === "templates" ? (
                <div className="grid gap-3 sm:grid-cols-3">
                  {templateCards.map((template) => (
                    <button
                      key={template.title}
                      type="button"
                      className="surface-card-soft rounded-[22px] px-4 py-4 text-left transition hover:-translate-y-[1px]"
                    >
                      <div className="text-sm font-semibold text-slate-950">{template.title}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-500">{template.detail}</div>
                    </button>
                  ))}
                </div>
              ) : null}

              {activeTab === "guidance" ? (
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
                  <div className="space-y-3">
                    {[
                      "Do not paste restricted legal, HR, or financial data into an unapproved workflow.",
                      "Review outputs before sending them externally or relying on them in a decision.",
                      "Escalate unusual use through the request process before continuing.",
                    ].map((item) => (
                      <div key={item} className="rounded-[18px] border border-[#bfdedf]/70 px-4 py-3 text-sm leading-6 text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[
                      ["Logging", "On"],
                      ["Policy mode", "Guided"],
                      ["Data scope", "Approved internal data"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[18px] border border-[#bfdedf]/70 px-4 py-3">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                        <div className="mt-1 text-sm font-medium text-slate-900">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
