"use client"

import {
  AlertCircleIcon,
  ArchiveIcon,
  ArrowRightIcon,
  BellIcon,
  BookOpenIcon,
  CalendarIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  ExternalLinkIcon,
  EyeIcon,
  FileTextIcon,
  FolderIcon,
  GlobeIcon,
  HashIcon,
  HeartIcon,
  HomeIcon,
  ImageIcon,
  InboxIcon,
  InfoIcon,
  LayersIcon,
  LinkIcon,
  ListIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
  PaletteIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  TagIcon,
  TrashIcon,
  TypeIcon,
  UserIcon,
  XIcon,
} from "lucide-react"
import { useState } from "react"

import { AppLink } from "@/components/elementary/AppLink"
import {
  MenuLink,
  MenuLinkBadge,
  MenuLinkContent,
  MenuLinkDescription,
  MenuLinkGroupLabel,
  MenuLinkIcon,
  MenuLinkLabel,
  MenuLinkSeparator,
  MenuLinkShortcut,
  MenuLinkTrailing,
} from "@/components/elementary/MenuLink"
import { Spinner } from "@/components/elementary/Spinner"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// ---------------------------------------------------------------------------
// Section wrapper
// ---------------------------------------------------------------------------

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4 border-b pb-3">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        )}
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  )
}

function Showcase({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Table of contents
// ---------------------------------------------------------------------------

const sections = [
  { id: "buttons", label: "Buttons" },
  { id: "menu-links", label: "MenuLink" },
  { id: "app-links", label: "AppLink" },
  { id: "inputs", label: "Inputs" },
  { id: "select", label: "Select" },
  { id: "textarea", label: "Textarea" },
  { id: "checkbox", label: "Checkbox" },
  { id: "cards", label: "Cards" },
  { id: "tabs", label: "Tabs" },
  { id: "accordion", label: "Accordion" },
  { id: "dialog", label: "Dialog" },
  { id: "dropdown", label: "Dropdown Menu" },
  { id: "tooltip", label: "Tooltip" },
  { id: "skeleton", label: "Skeleton" },
  { id: "spinner", label: "Spinner" },
  { id: "typography", label: "Typography" },
  { id: "colors", label: "Colors" },
  { id: "spacing", label: "Spacing" },
  { id: "icons", label: "Icons" },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function DesignSystemPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="flex gap-8">
      {/* Sticky sidebar TOC */}
      <nav className="hidden w-56 shrink-0 lg:block">
        <div className="sticky top-24 space-y-0.5">
          <p className="text-muted-foreground mb-3 text-xs font-semibold uppercase tracking-wider">
            On this page
          </p>
          {sections.map((s) => (
            <MenuLink key={s.id} href={`#${s.id}`} size="sm" variant="muted">
              <MenuLinkIcon>
                <HashIcon />
              </MenuLinkIcon>
              <MenuLinkLabel>{s.label}</MenuLinkLabel>
            </MenuLink>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <div className="min-w-0 flex-1 space-y-16 pb-32">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Design System</h1>
          <p className="text-muted-foreground mt-2">
            All UI components and design tokens used across the application.
          </p>
        </div>

        {/* ---- Buttons ---- */}
        <Section
          id="buttons"
          title="Buttons"
          description="Primary actions, variants, sizes, and states."
        >
          <Showcase label="Variants">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </Showcase>

          <Showcase label="Sizes">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </Showcase>

          <Showcase label="Icon buttons">
            <Button size="icon-xs" variant="outline">
              <PlusIcon />
            </Button>
            <Button size="icon-sm" variant="outline">
              <EditIcon />
            </Button>
            <Button size="icon" variant="outline">
              <SettingsIcon />
            </Button>
            <Button size="icon-lg" variant="outline">
              <TrashIcon />
            </Button>
          </Showcase>

          <Showcase label="With icons">
            <Button>
              <PlusIcon /> Create
            </Button>
            <Button variant="outline">
              <DownloadIcon /> Download
            </Button>
            <Button variant="destructive">
              <TrashIcon /> Delete
            </Button>
          </Showcase>

          <Showcase label="States">
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
          </Showcase>
        </Section>

        {/* ---- MenuLink ---- */}
        <Section
          id="menu-links"
          title="MenuLink"
          description="Composable navigation links for menus, sidebars, and lists."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sidebar Navigation</CardTitle>
                <CardDescription>
                  Typical sidebar with icons, badges, and groups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-0.5">
                  <MenuLinkGroupLabel>Main</MenuLinkGroupLabel>
                  <MenuLink href="#" variant="active">
                    <MenuLinkIcon>
                      <HomeIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Dashboard</MenuLinkLabel>
                  </MenuLink>
                  <MenuLink href="#">
                    <MenuLinkIcon>
                      <InboxIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Inbox</MenuLinkLabel>
                    <MenuLinkBadge>12</MenuLinkBadge>
                  </MenuLink>
                  <MenuLink href="#">
                    <MenuLinkIcon>
                      <FileTextIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Documents</MenuLinkLabel>
                  </MenuLink>
                  <MenuLink href="#" hasSubmenu>
                    <MenuLinkIcon>
                      <FolderIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Projects</MenuLinkLabel>
                  </MenuLink>

                  <MenuLinkSeparator />
                  <MenuLinkGroupLabel>Settings</MenuLinkGroupLabel>

                  <MenuLink href="#">
                    <MenuLinkIcon>
                      <UserIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Profile</MenuLinkLabel>
                  </MenuLink>
                  <MenuLink href="#">
                    <MenuLinkIcon>
                      <SettingsIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Settings</MenuLinkLabel>
                    <MenuLinkShortcut>⌘,</MenuLinkShortcut>
                  </MenuLink>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Descriptions</CardTitle>
                <CardDescription>
                  Rich menu links with subtitle text
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-0.5">
                  <MenuLink href="#">
                    <MenuLinkIcon>
                      <BellIcon />
                    </MenuLinkIcon>
                    <MenuLinkContent>
                      <MenuLinkLabel>Notifications</MenuLinkLabel>
                      <MenuLinkDescription>
                        Manage your notification preferences
                      </MenuLinkDescription>
                    </MenuLinkContent>
                  </MenuLink>
                  <MenuLink href="#">
                    <MenuLinkIcon>
                      <GlobeIcon />
                    </MenuLinkIcon>
                    <MenuLinkContent>
                      <MenuLinkLabel>Language</MenuLinkLabel>
                      <MenuLinkDescription>
                        Choose your preferred language
                      </MenuLinkDescription>
                    </MenuLinkContent>
                    <MenuLinkTrailing>
                      <span className="text-muted-foreground text-xs">EN</span>
                    </MenuLinkTrailing>
                  </MenuLink>
                  <MenuLink href="https://example.com" external>
                    <MenuLinkIcon>
                      <BookOpenIcon />
                    </MenuLinkIcon>
                    <MenuLinkContent>
                      <MenuLinkLabel>Documentation</MenuLinkLabel>
                      <MenuLinkDescription>
                        Opens in a new tab
                      </MenuLinkDescription>
                    </MenuLinkContent>
                  </MenuLink>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Variants</CardTitle>
                <CardDescription>
                  default, active, muted, destructive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-0.5">
                  <MenuLink href="#" variant="default">
                    <MenuLinkIcon>
                      <LayersIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Default</MenuLinkLabel>
                  </MenuLink>
                  <MenuLink href="#" variant="active">
                    <MenuLinkIcon>
                      <CheckCircle2Icon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Active</MenuLinkLabel>
                  </MenuLink>
                  <MenuLink href="#" variant="muted">
                    <MenuLinkIcon>
                      <ArchiveIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Muted</MenuLinkLabel>
                  </MenuLink>
                  <MenuLink href="#" variant="destructive">
                    <MenuLinkIcon>
                      <TrashIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Destructive</MenuLinkLabel>
                  </MenuLink>
                  <MenuLink href="#" disabled>
                    <MenuLinkIcon>
                      <XIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Disabled</MenuLinkLabel>
                  </MenuLink>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sizes</CardTitle>
                <CardDescription>sm, default, lg</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-0.5">
                  <MenuLink href="#" size="sm">
                    <MenuLinkIcon>
                      <StarIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Small</MenuLinkLabel>
                  </MenuLink>
                  <MenuLink href="#" size="default">
                    <MenuLinkIcon>
                      <StarIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Default</MenuLinkLabel>
                  </MenuLink>
                  <MenuLink href="#" size="lg">
                    <MenuLinkIcon>
                      <StarIcon />
                    </MenuLinkIcon>
                    <MenuLinkLabel>Large</MenuLinkLabel>
                  </MenuLink>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* ---- AppLink ---- */}
        <Section
          id="app-links"
          title="AppLink"
          description="Existing link component with button variant styling."
        >
          <Showcase label="Variants">
            <AppLink href="#" variant="link">
              Link variant
            </AppLink>
            <AppLink href="#" variant="default">
              Default
            </AppLink>
            <AppLink href="#" variant="outline">
              Outline
            </AppLink>
            <AppLink href="#" variant="secondary">
              Secondary
            </AppLink>
            <AppLink href="#" variant="ghost">
              Ghost
            </AppLink>
          </Showcase>
          <Showcase label="With adornments">
            <AppLink
              href="#"
              variant="default"
              endAdornment={<ArrowRightIcon className="size-4" />}
            >
              With arrow
            </AppLink>
            <AppLink
              href="#"
              variant="outline"
              startAdornment={<ExternalLinkIcon className="size-4" />}
            >
              External
            </AppLink>
          </Showcase>
        </Section>

        {/* ---- Inputs ---- */}
        <Section
          id="inputs"
          title="Inputs"
          description="Text inputs in various states."
        >
          <Showcase label="States">
            <Input placeholder="Default input" />
            <Input placeholder="Disabled" disabled />
            <Input type="password" placeholder="Password" />
            <Input type="email" placeholder="Email" />
          </Showcase>
          <Showcase label="With label">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name-input">Full name</Label>
              <Input id="name-input" placeholder="John Doe" />
            </div>
          </Showcase>
        </Section>

        {/* ---- Select ---- */}
        <Section id="select" title="Select" description="Dropdown selections.">
          <Showcase label="Default">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Choose option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one">Option One</SelectItem>
                <SelectItem value="two">Option Two</SelectItem>
                <SelectItem value="three">Option Three</SelectItem>
              </SelectContent>
            </Select>
          </Showcase>
        </Section>

        {/* ---- Textarea ---- */}
        <Section
          id="textarea"
          title="Textarea"
          description="Multi-line text input."
        >
          <Showcase label="Default">
            <Textarea
              placeholder="Write something..."
              className="min-w-[300px]"
            />
          </Showcase>
        </Section>

        {/* ---- Checkbox ---- */}
        <Section id="checkbox" title="Checkbox" description="Toggle options.">
          <Showcase label="States">
            <div className="flex items-center gap-2">
              <Checkbox id="cb1" />
              <Label htmlFor="cb1">Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb2" defaultChecked />
              <Label htmlFor="cb2">Checked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb3" disabled />
              <Label htmlFor="cb3">Disabled</Label>
            </div>
          </Showcase>
        </Section>

        {/* ---- Cards ---- */}
        <Section
          id="cards"
          title="Cards"
          description="Content containers with header, body, and footer."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  A brief description of the card content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  This is the main content area of the card.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stats Card</CardTitle>
                <CardDescription>Monthly overview</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">2,847</p>
                <p className="text-muted-foreground text-xs">
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* ---- Tabs ---- */}
        <Section
          id="tabs"
          title="Tabs"
          description="Tab navigation with content panels."
        >
          <Showcase label="Default variant">
            <Tabs defaultValue="overview" className="w-full max-w-lg">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <p className="text-muted-foreground text-sm">
                  Overview content goes here.
                </p>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <p className="text-muted-foreground text-sm">
                  Analytics content goes here.
                </p>
              </TabsContent>
              <TabsContent value="reports" className="mt-4">
                <p className="text-muted-foreground text-sm">
                  Reports content goes here.
                </p>
              </TabsContent>
            </Tabs>
          </Showcase>

          <Showcase label="Line variant">
            <Tabs defaultValue="tab1" className="w-full max-w-lg">
              <TabsList variant="line">
                <TabsTrigger value="tab1">General</TabsTrigger>
                <TabsTrigger value="tab2">Security</TabsTrigger>
                <TabsTrigger value="tab3">Billing</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <p className="text-muted-foreground text-sm">
                  General settings.
                </p>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <p className="text-muted-foreground text-sm">
                  Security settings.
                </p>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <p className="text-muted-foreground text-sm">
                  Billing settings.
                </p>
              </TabsContent>
            </Tabs>
          </Showcase>
        </Section>

        {/* ---- Accordion ---- */}
        <Section
          id="accordion"
          title="Accordion"
          description="Collapsible content sections."
        >
          <Accordion type="single" collapsible className="w-full max-w-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is this design system?</AccordionTrigger>
              <AccordionContent>
                A collection of reusable UI components built with Radix UI,
                Tailwind CSS, and class-variance-authority.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I use components?</AccordionTrigger>
              <AccordionContent>
                Import them from @/components/ui and compose them together. Each
                component supports variants and sizes via CVA.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I customize the theme?</AccordionTrigger>
              <AccordionContent>
                Yes. Edit the design-system package theme.css to modify CSS
                variables, colors, typography, and spacing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        {/* ---- Dialog ---- */}
        <Section
          id="dialog"
          title="Dialog"
          description="Modal dialogs for focused interactions."
        >
          <Showcase label="Default">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is a description of what this dialog does.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <Input placeholder="Enter something..." />
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setDialogOpen(false)}>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Showcase>
        </Section>

        {/* ---- Dropdown ---- */}
        <Section
          id="dropdown"
          title="Dropdown Menu"
          description="Contextual action menus."
        >
          <Showcase label="Default">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <MoreHorizontalIcon className="size-4" />
                  Actions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <EditIcon className="mr-2 size-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CopyIcon className="mr-2 size-4" />
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <TrashIcon className="mr-2 size-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Showcase>
        </Section>

        {/* ---- Tooltip ---- */}
        <Section
          id="tooltip"
          title="Tooltip"
          description="Hover hints for extra context."
        >
          <Showcase label="Default">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <InfoIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Showcase>
        </Section>

        {/* ---- Skeleton ---- */}
        <Section
          id="skeleton"
          title="Skeleton"
          description="Loading placeholders."
        >
          <Showcase label="Shapes">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="size-10 rounded-full" />
            <Skeleton className="h-24 w-48 rounded-lg" />
          </Showcase>
          <Showcase label="Card skeleton">
            <div className="w-64 space-y-3">
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </Showcase>
        </Section>

        {/* ---- Spinner ---- */}
        <Section
          id="spinner"
          title="Spinner"
          description="Loading indicators."
        >
          <Showcase label="Variants">
            <Spinner className="size-4" borderColorClass="border-gray-900" />
            <Spinner className="size-6" borderColorClass="border-gray-900" />
            <Spinner
              className="size-8"
              borderColorClass="border-red-600"
              borderWidthClass="border-2"
            />
            <Spinner
              className="size-10"
              borderColorClass="border-blue-600"
              borderWidthClass="border-[3px]"
            />
          </Showcase>
        </Section>

        {/* ---- Typography ---- */}
        <Section
          id="typography"
          title="Typography"
          description="Text styles and scales."
        >
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">
              Heading 1 — The quick brown fox
            </h1>
            <h2 className="text-3xl font-semibold tracking-tight">
              Heading 2 — The quick brown fox
            </h2>
            <h3 className="text-2xl font-semibold tracking-tight">
              Heading 3 — The quick brown fox
            </h3>
            <h4 className="text-xl font-semibold tracking-tight">
              Heading 4 — The quick brown fox
            </h4>
            <h5 className="text-lg font-medium">
              Heading 5 — The quick brown fox
            </h5>
            <p className="text-base leading-7">
              Body — The quick brown fox jumps over the lazy dog. This is the
              default paragraph style used for body text throughout the
              application.
            </p>
            <p className="text-muted-foreground text-sm">
              Small / Muted — Secondary text for descriptions and hints.
            </p>
            <p className="text-xs font-medium uppercase tracking-wider">
              Overline — Label text
            </p>
          </div>
        </Section>

        {/* ---- Colors ---- */}
        <Section
          id="colors"
          title="Colors"
          description="Semantic and palette colors from the design system."
        >
          <Showcase label="Semantic">
            <div className="flex flex-wrap gap-3">
              {[
                { name: "background", cls: "bg-background border" },
                { name: "foreground", cls: "bg-foreground" },
                { name: "primary", cls: "bg-primary" },
                { name: "primary-fg", cls: "bg-primary-foreground border" },
                { name: "secondary", cls: "bg-secondary" },
                { name: "muted", cls: "bg-muted" },
                { name: "accent", cls: "bg-accent" },
                { name: "destructive", cls: "bg-destructive" },
                { name: "border", cls: "bg-border" },
                { name: "ring", cls: "bg-ring" },
              ].map((c) => (
                <div key={c.name} className="flex flex-col items-center gap-1">
                  <div className={`size-10 rounded-md ${c.cls}`} />
                  <span className="text-muted-foreground text-[10px]">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </Showcase>
          <Showcase label="Palette">
            <div className="flex flex-wrap gap-3">
              {[
                "red",
                "orange",
                "amber",
                "yellow",
                "lime",
                "green",
                "emerald",
                "teal",
                "cyan",
                "sky",
                "blue",
                "indigo",
                "violet",
                "purple",
                "fuchsia",
                "pink",
                "rose",
                "slate",
                "gray",
                "zinc",
              ].map((color) => (
                <div key={color} className="flex flex-col items-center gap-1">
                  <div
                    className={`size-10 rounded-md bg-${color}-500`}
                    style={{
                      backgroundColor: `var(--color-${color}-500, oklch(0.6 0.2 0))`,
                    }}
                  />
                  <span className="text-muted-foreground text-[10px]">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </Showcase>
        </Section>

        {/* ---- Spacing ---- */}
        <Section
          id="spacing"
          title="Spacing"
          description="Visual spacing scale reference."
        >
          <div className="flex flex-wrap items-end gap-3">
            {[1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24].map((s) => (
              <div key={s} className="flex flex-col items-center gap-1">
                <div
                  className="bg-primary/20 rounded"
                  style={{ width: `${s * 4}px`, height: `${s * 4}px` }}
                />
                <span className="text-muted-foreground text-[10px]">
                  {s} ({s * 4}px)
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* ---- Icons ---- */}
        <Section
          id="icons"
          title="Icons"
          description="Lucide React icons used in the project."
        >
          <div className="grid grid-cols-6 gap-4 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12">
            {[
              { icon: <HomeIcon />, name: "Home" },
              { icon: <UserIcon />, name: "User" },
              { icon: <SettingsIcon />, name: "Settings" },
              { icon: <SearchIcon />, name: "Search" },
              { icon: <BellIcon />, name: "Bell" },
              { icon: <MailIcon />, name: "Mail" },
              { icon: <HeartIcon />, name: "Heart" },
              { icon: <StarIcon />, name: "Star" },
              { icon: <FolderIcon />, name: "Folder" },
              { icon: <FileTextIcon />, name: "FileText" },
              { icon: <ImageIcon />, name: "Image" },
              { icon: <CalendarIcon />, name: "Calendar" },
              { icon: <MapPinIcon />, name: "MapPin" },
              { icon: <TagIcon />, name: "Tag" },
              { icon: <LinkIcon />, name: "Link" },
              { icon: <GlobeIcon />, name: "Globe" },
              { icon: <PaletteIcon />, name: "Palette" },
              { icon: <TypeIcon />, name: "Type" },
              { icon: <LayersIcon />, name: "Layers" },
              { icon: <ListIcon />, name: "List" },
              { icon: <MessageSquareIcon />, name: "Message" },
              { icon: <AlertCircleIcon />, name: "Alert" },
              { icon: <CheckCircle2Icon />, name: "Check" },
              { icon: <InfoIcon />, name: "Info" },
              { icon: <EyeIcon />, name: "Eye" },
              { icon: <EditIcon />, name: "Edit" },
              { icon: <TrashIcon />, name: "Trash" },
              { icon: <CopyIcon />, name: "Copy" },
              { icon: <DownloadIcon />, name: "Download" },
              { icon: <PlusIcon />, name: "Plus" },
              { icon: <XIcon />, name: "X" },
              { icon: <ChevronDownIcon />, name: "Chevron" },
              { icon: <ExternalLinkIcon />, name: "External" },
              { icon: <ArchiveIcon />, name: "Archive" },
              { icon: <InboxIcon />, name: "Inbox" },
              { icon: <BookOpenIcon />, name: "Book" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-1.5 rounded-md p-2 hover:bg-gray-100"
              >
                <span className="text-muted-foreground [&_svg]:size-5">
                  {item.icon}
                </span>
                <span className="text-muted-foreground text-[9px] leading-none">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
