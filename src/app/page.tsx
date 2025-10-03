
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading, Lead } from '@/components/text'
import { AnimatedNumber } from '@/components/animated-number'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { 
  Stethoscope, 
  ShoppingBag, 
  Heart, 
  Brain, 
  Sparkles, 
  TrendingUp,
  Activity,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle2,
  Users,
  Dog,
  Home as HomeIcon,
  MessageSquare,
  Package,
  Bot,
  Microscope,
  Video,
  GraduationCap,
  ShoppingCart,
  Boxes,
  Dna
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'CIMA Animal Health: Pioneering AI-powered solutions for veterinary medicine, animal health products, and professional pet services. A unified force elevating care to new heights.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="#"
              className="flex items-center gap-1 rounded-full bg-[#1D3D7C]/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-[#1D3D7C]/50"
            >
              Pioneering AI-Powered Animal Health Solutions
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            A Unified Force in Animal Health
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Elevating care to new heights with AI-driven innovation across veterinary medicine, retail solutions, and professional services.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#services">Explore Our Companies</Button>
            <Button variant="secondary" href="#innovation">
              AI Innovation
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function OurCompanies() {
  return (
    <Container>
      <Subheading>Industry-Leading Companies</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Trusted by professionals across the animal health industry
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Veterinary Solutions"
          title="Creative Science"
          description="Ensuring veterinarians, owners, and producers have access to essential treatment solutions backed by science and innovation."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#1D3D7C]/10 to-[#00163C]/10">
              <Microscope className="size-32 text-[#1D3D7C]" strokeWidth={1} />
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Professional Products"
          title="Revival Animal Health"
          description="Delivering trusted solutions including vaccines, supplements, and expert guidance to pet professionals for over 35 years."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#00163C]/10 to-[#00d084]/10">
              <Activity className="size-32 text-[#00163C]" strokeWidth={1} />
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Grooming Excellence"
          title="PetStore Direct"
          description="Providing grooming professionals with trusted supplies and AI-powered inventory management for exceptional results."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#00d084]/10 to-[#1D3D7C]/10">
              <ShoppingBag className="size-32 text-[#00d084]" strokeWidth={1} />
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Medical Supplies"
          title="Med-Vet International"
          description="A leading provider of high-quality medical and veterinary supplies since 1984, now enhanced with AI-driven logistics."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#1D3D7C]/10 to-[#00d084]/10">
              <Package className="size-32 text-[#1D3D7C]" strokeWidth={1} />
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-4 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function AIInnovation() {
  return (
    <Container className="mt-32">
      <Subheading>AI-Powered Innovation</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Pioneering artificial intelligence in animal health services
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        CIMA Animal Health is at the forefront of integrating cutting-edge AI technology across our portfolio of companies, revolutionizing how professionals deliver care, manage inventory, and serve their clients.
      </Lead>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-3">
        <BentoCard
          eyebrow="Diagnostics"
          title="AI-Enhanced Veterinary Care"
          description="Machine learning algorithms assist veterinarians with faster, more accurate diagnostics, treatment recommendations, and predictive health analytics."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#1D3D7C]/10 to-[#00163C]/10">
              <Brain className="size-32 text-[#1D3D7C]" strokeWidth={1} />
            </div>
          }
          className="lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Inventory Intelligence"
          title="Smart Supply Chain"
          description="AI-driven demand forecasting and inventory optimization ensure professionals always have the right products at the right time."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#00163C]/10 to-[#00d084]/10">
              <Boxes className="size-32 text-[#00163C]" strokeWidth={1} />
            </div>
          }
        />
        <BentoCard
          eyebrow="Customer Insights"
          title="Predictive Analytics"
          description="Advanced data analytics help our partners understand customer needs, optimize pricing, and deliver personalized service experiences."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#00d084]/10 to-[#1D3D7C]/10">
              <TrendingUp className="size-32 text-[#00d084]" strokeWidth={1} />
            </div>
          }
          className="lg:rounded-tr-4xl"
        />
      </div>
    </Container>
  )
}

function CoreValues() {
  return (
    <Container className="mt-32">
      <Subheading>Our Core Values</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Guided by compassion, innovation, mentorship, and authenticity
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-start">
          <div className="flex size-12 items-center justify-center rounded-lg bg-[#1D3D7C]/10">
            <Heart className="size-6 text-[#1D3D7C]" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-950">Compassion</h3>
          <p className="mt-2 text-sm/6 text-gray-600">
            We prioritize the well-being of animals and those who care for them, ensuring ethical and responsible solutions.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex size-12 items-center justify-center rounded-lg bg-[#00d084]/10">
            <Sparkles className="size-6 text-[#00d084]" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-950">Innovation</h3>
          <p className="mt-2 text-sm/6 text-gray-600">
            We embrace continuous improvement and cutting-edge AI solutions to advance animal health.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex size-12 items-center justify-center rounded-lg bg-[#1D3D7C]/10">
            <GraduationCap className="size-6 text-[#1D3D7C]" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-950">Mentorship</h3>
          <p className="mt-2 text-sm/6 text-gray-600">
            We support veterinary professionals with knowledge, education, and collaboration to enhance patient care.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex size-12 items-center justify-center rounded-lg bg-[#00d084]/10">
            <CheckCircle2 className="size-6 text-[#00d084]" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-950">Authenticity</h3>
          <p className="mt-2 text-sm/6 text-gray-600">
            We stay true to our mission, fostering trust through honesty, transparency, and genuine commitment.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Stats() {
  return (
    <Container className="mt-32">
      <Subheading>By the numbers</Subheading>
      <Heading as="h3" className="mt-2">
        Trusted across the animal health industry
      </Heading>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-1">
          <div className="text-4xl font-semibold text-gray-950">
            <AnimatedNumber start={0} end={35} />+
          </div>
          <div className="text-sm/6 text-gray-600">Years of industry expertise</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-4xl font-semibold text-gray-950">
            <AnimatedNumber start={0} end={4} />
          </div>
          <div className="text-sm/6 text-gray-600">Industry-leading companies</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-4xl font-semibold text-gray-950">
            <AnimatedNumber start={0} end={10000} />+
          </div>
          <div className="text-sm/6 text-gray-600">Professional customers served</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-4xl font-semibold text-gray-950">
            <AnimatedNumber start={0} end={99} />%
          </div>
          <div className="text-sm/6 text-gray-600">Customer satisfaction rate</div>
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <OurCompanies />
          <AIInnovation />
          <CoreValues />
          <Stats />
        </div>
      </main>
      <Footer />
    </div>
  )
}
