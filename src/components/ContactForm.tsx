"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, project_type: projectType, message }),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      // Reset form
      setName("");
      setEmail("");
      setProjectType("");
      setMessage("");
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-4xl">Ready to Start Your Project?</CardTitle>
        <CardDescription>
          Fill out the form below and we'll be in touch shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project_type">Type of Project</Label>
            <Select onValueChange={setProjectType} value={projectType}>
              <SelectTrigger>
                <SelectValue placeholder="Select a project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kitchen">Custom Kitchen</SelectItem>
                <SelectItem value="bathroom">Custom Bathroom</SelectItem>
                <SelectItem value="built-in">
                  Built-in or Entertainment Center
                </SelectItem>
                <SelectItem value="office">Home Office</SelectItem>
                <SelectItem value="prebuilt">Prebuilt Cabinetry</SelectItem>
                <SelectItem value="commercial">Commercial Project</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button size="lg" className="w-full" type="submit">
            Send Message
          </Button>
          {status && (
            <p className="text-center text-sm text-muted-foreground pt-2">
              {status}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
