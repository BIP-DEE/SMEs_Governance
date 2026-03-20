"use client";

import { useState } from "react";
import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { AppIcon } from "@/components/ui/app-icon";
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
          "Decisions:\n1. Procurement will standardise supplier review templates by Friday.\n2. Legal requested tighter controls for contract clause drafting workflows.\n3. Operations will pilot a meeting-summary workflow with manager review enabled.\n\nAction items:\n- Nina Patel to finalise the procurement template rollout.\n- Sophie Turner to confirm legal review checkpoints.\n- Daniel Scott to configure the pilot workspace and logging.",
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
          title="Work inside the approved assistant."
          description="Keep the conversation in focus and pull in templates or guidance only when needed."
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
          <Card className="surface-focus-employee overflow-hidden">
            <CardHeader className="border-b border-[#c7e1e9]/80">
              <Badge className="w-fit">Sessions</Badge>
              <CardTitle>Recent conversations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-4">
              {conversations.map((conversation) => {
                const active = selectedConversationId === conversation.id;

                return (
                  <button
                    type="button"
                    key={conversation.id}
                    onClick={() => setSelectedConversationId(conversation.id)}
                    className={cn(
                      "w-full rounded-[18px] border px-4 py-4 text-left transition-all duration-200 ease-out",
                      active
                        ? "surface-card border-[#9dcde2] shadow-[0_14px_28px_rgba(28,65,118,0.07)]"
                        : "interactive-card border-[#c6e0e8]/80 bg-white/54"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-950">{conversation.title}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-500">{conversation.preview}</div>
                      </div>
                      <div className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-slate-500">{conversation.time}</div>
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          <Card className="surface-focus-employee overflow-hidden">
            <CardHeader className="border-b border-[#c7e1e9]/80">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <Badge tone="success" className="w-fit">
                    Approved workspace
                  </Badge>
                  <CardTitle className="text-[1.35rem]">{selectedConversation.title}</CardTitle>
                  <p className="max-w-2xl text-sm leading-6 text-slate-500">{selectedConversation.preview}</p>
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
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="success">Approved internal use</Badge>
                    <span className="text-xs text-slate-500">Use approved data only and review outputs before sharing.</span>
                  </div>

                  <div className="space-y-3">
                    {selectedConversation.messages.map((message, index) => (
                      <div
                        key={`${message.role}-${index}`}
                        className={cn(
                          "max-w-3xl rounded-[22px] border px-4 py-4",
                          message.role === "assistant"
                            ? "surface-card-soft border-[#c7e1e9]/80"
                            : "ml-auto border-[#b7d7e6]/80 bg-[linear-gradient(180deg,rgba(236,247,255,0.9),rgba(228,243,252,0.82))]"
                        )}
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
                    <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Prompt composer
                    </div>
                    <textarea
                      className="min-h-[140px] w-full rounded-[20px] border border-[#c4dfe8]/85 bg-white/78 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/90 focus:ring-4 focus:ring-cyan-500/12"
                      placeholder="Ask for help with an approved internal task."
                      defaultValue=""
                    />
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge tone="success">Logging on</Badge>
                        <Badge>Manager review available</Badge>
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
                <div className="grid gap-3 md:grid-cols-3">
                  {templateCards.map((template) => (
                    <button
                      key={template.title}
                      type="button"
                      className="surface-card-soft interactive-card rounded-[22px] px-4 py-4 text-left"
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
                      <div key={item} className="surface-card-soft interactive-card rounded-[18px] px-4 py-4 text-sm leading-6 text-slate-700">
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
                      <div key={label} className="rounded-[18px] border border-[#c7e1e9]/80 bg-white/56 px-4 py-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                        <div className="mt-2 text-sm font-medium text-slate-900">{value}</div>
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
