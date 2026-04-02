"use client";

import { useMemo, useState } from "react";
import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const conversations = [
  {
    id: "summary",
    title: "Weekly support summary",
    time: "2 min ago",
    messages: [
      {
        role: "user",
        meta: "You • 10:14",
        content: "Summarise these meeting notes into three decisions, action items, and owners.",
      },
      {
        role: "assistant",
        meta: "Approved AI workspace • 10:15",
        content:
          "Decisions:\n1. Procurement standardises supplier review templates.\n2. Legal wants tighter drafting controls.\n3. Operations pilots meeting summaries with manager review.\n\nActions:\n- Nina Patel finalises the rollout.\n- Sophie Turner confirms legal checkpoints.\n- Daniel Scott configures the pilot workspace.",
      },
    ],
  },
  {
    id: "reply",
    title: "Customer reply draft",
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
          "Thanks for your patience. We expect to provide a confirmed delivery update by Friday and will share it as soon as it is ready.",
      },
    ],
  },
  {
    id: "ops",
    title: "Ops meeting actions",
    time: "Yesterday",
    messages: [
      {
        role: "user",
        meta: "You • Yesterday",
        content: "Extract action items and owners from these operations notes.",
      },
      {
        role: "assistant",
        meta: "Approved AI workspace • Yesterday",
        content: "Action list drafted with owners and dates. Review before sharing.",
      },
    ],
  },
];

const templateCards = [
  "Draft internal email",
  "Summarise meeting notes",
  "Create customer reply",
];

const guidance = [
  "Use approved data only.",
  "Review outputs before sharing.",
  "Escalate unusual use through requests.",
];

export default function EmployeeWorkspacePage() {
  const [selectedConversationId, setSelectedConversationId] = useState("summary");
  const [activeTab, setActiveTab] = useState("chat");
  const selectedConversation = useMemo(
    () => conversations.find((conversation) => conversation.id === selectedConversationId) ?? conversations[0],
    [selectedConversationId]
  );

  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="AI workspace"
          title="Work inside the approved assistant."
          description=""
          actions={
            <>
              <Button variant="secondary" href="/employee/policies">
                Policies
              </Button>
              <Button>New chat</Button>
            </>
          }
          meta={<Badge tone="success">Logging on</Badge>}
        />

        <section className="grid gap-6 xl:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Sessions</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Recent chats
              </h2>
            </div>

            <div className="space-y-2">
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
                        ? "surface-focus-employee border-cyan-300/16"
                        : "surface-card-soft interactive-card"
                    )}
                  >
                    <div className="text-sm font-semibold text-slate-100">{conversation.title}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                      {conversation.time}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <Badge tone="success" className="w-fit">
                  Approved workspace
                </Badge>
                <h2 className="text-[1.25rem] font-semibold tracking-[-0.04em] text-slate-50">
                  {selectedConversation.title}
                </h2>
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

            {activeTab === "chat" ? (
              <div className="surface-dark rounded-[30px] px-5 py-5 sm:px-6">
                <div className="flex flex-wrap gap-2">
                  <Badge tone="success">Approved</Badge>
                  <Badge>Internal data only</Badge>
                </div>

                <div className="mt-5 space-y-3">
                  {selectedConversation.messages.map((message, index) => (
                    <div
                      key={`${message.role}-${index}`}
                      className={cn(
                        "max-w-3xl rounded-[22px] border px-4 py-4",
                        message.role === "assistant"
                          ? "surface-card-soft border-white/8"
                          : "ml-auto border-cyan-300/16 bg-[linear-gradient(180deg,rgba(12,42,62,0.8),rgba(8,26,44,0.82))]"
                      )}
                    >
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-slate-100">
                          {message.role === "assistant" ? "AI Assistant" : "You"}
                        </p>
                        <span className="text-[11px] uppercase tracking-[0.14em] text-slate-400">
                          {message.meta}
                        </span>
                      </div>
                      <div className="whitespace-pre-line text-sm leading-7 text-slate-200">{message.content}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                  <textarea
                    className="min-h-[120px] w-full rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,28,43,0.88),rgba(9,14,24,0.84))] px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-cyan-300/28 focus:ring-4 focus:ring-cyan-500/12"
                    placeholder="Ask for help with an approved internal task."
                    defaultValue=""
                  />
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <Badge tone="success">Logging on</Badge>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="secondary" onClick={() => setActiveTab("templates")}>
                        Use template
                      </Button>
                      <Button size="sm">Send</Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {activeTab === "templates" ? (
              <div className="grid gap-3 md:grid-cols-3">
                {templateCards.map((template) => (
                  <button
                    key={template}
                    type="button"
                    className="surface-card-soft interactive-card rounded-[22px] px-4 py-4 text-left text-sm font-semibold text-slate-100"
                  >
                    {template}
                  </button>
                ))}
              </div>
            ) : null}

            {activeTab === "guidance" ? (
              <div className="grid gap-3">
                {guidance.map((item) => (
                  <div key={item} className="surface-card-soft rounded-[20px] px-4 py-4 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
                <Button variant="secondary" href="/employee/policies">
                  Open policies
                </Button>
              </div>
            ) : null}
          </div>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
