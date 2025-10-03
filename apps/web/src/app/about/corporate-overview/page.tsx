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
  Dna,
  Building2,
  Handshake
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'CIMA Animal Health - Leading innovation in veterinary medicine, pet retail, and animal health solutions.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="#"
              className="flex items-center gap-1 rounded-full bg-[#2B5A9E]/20 px-3 py-0.5 text-sm/6 font-medium text-gray-900 data-hover:bg-[#2B5A9E]/30"
            >
              Transforming Animal Health Through Innovation
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Leading Innovation in Animal Health
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            CIMA Animal Health delivers comprehensive solutions across veterinary medicine, pet retail, and animal health products.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#companies">Our Companies</Button>
            <Button variant="secondary" href="#team">
              Leadership Team
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CompaniesSection() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Our Portfolio</Subheading>
          <Heading as="h2" className="mt-2">
            Four Leading Companies, One Vision
          </Heading>
          <Lead className="mt-6 text-gray-600">
            CIMA Animal Health brings together industry-leading brands to deliver comprehensive solutions across the animal health ecosystem.
          </Lead>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Creative Science */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-[#4A90E2]">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <Microscope className="size-8 text-[#2B5A9E]" />
                  <h3 className="text-xl font-semibold text-gray-900">Creative Science</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Innovative veterinary pharmaceuticals and nutritional products designed to improve animal health and wellness through science-backed formulations.
                </p>
              </div>
            </div>
          </div>

          {/* Revival Animal Health */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-[#4A90E2]">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <Heart className="size-8 text-[#2B5A9E]" />
                  <h3 className="text-xl font-semibold text-gray-900">Revival Animal Health</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Direct-to-consumer animal health products and expert advice, serving pet owners and livestock producers with quality care solutions.
                </p>
              </div>
            </div>
          </div>

          {/* PetStore Direct */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-[#4A90E2]">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="size-8 text-[#2B5A9E]" />
                  <h3 className="text-xl font-semibold text-gray-900">PetStore Direct</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Leading distributor of professional grooming supplies and pet care products, serving grooming professionals and pet retailers nationwide.
                </p>
              </div>
            </div>
          </div>

          {/* Med-Vet International */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-[#4A90E2]">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <Stethoscope className="size-8 text-[#2B5A9E]" />
                  <h3 className="text-xl font-semibold text-gray-900">Med-Vet International</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Comprehensive veterinary medical supplies and equipment, providing veterinary professionals with the tools they need for exceptional care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ManagementTeam() {
  const executives = [
    {
      name: 'Lynn Snodgrass',
      title: 'President & CEO',
      bio: 'As the Chief Executive Officer of CIMA Animal Health, Lynn Snodgrass has been a driving force behind the company\'s growth and its commitment to revolutionizing the animal health industry. With over 25 years of experience in veterinary medicine, animal healthcare, and business leadership, Lynn is passionate about advancing the health and well-being of animals worldwide.',
    },
    {
      name: 'Kyle Hemenover',
      title: 'CFO',
      bio: 'Kyle Hemenover is a strategic financial leader who embraces change and is committed to continuous improvement initiatives with a focus on developing talent. Kyle brings a global perspective, and his vast experience in various manufacturing and distribution industries is a testament to his expertise. He is a Certified Public Accountant and holds a master\'s in business administration from the University of Notre Dame.',
    },
    {
      name: 'Joel Harrington',
      title: 'President, Revival Animal Health',
      bio: 'Joel brings over 20 years of leadership experience spanning call centers, marketing, digital marketing/eCommerce, and customer experience. With 15+ years in sales and operations leadership, he excels in driving growth, building high-performing teams, and fostering cross-functional collaboration.',
    },
    {
      name: 'Domenico Ponti',
      title: 'President, PetStore Direct',
      bio: 'Domenico is a visionary entrepreneur known for building businesses from the ground up and transforming industries. As co-founder of PetStore Direct, he helped turn a bold idea into a thriving company, reshaping the pet grooming industry with innovation, efficiency, and a strong company culture.',
    },
    {
      name: 'Tony Moore',
      title: 'President, Med-Vet International',
      bio: 'Throughout his career, Tony has held leadership positions within veterinary manufacturing and distribution organizations, where he developed deep expertise in organizational transformation, business development, sales training, marketing, product launches, and supply chain management.',
    },
    {
      name: 'Elena Volnova',
      title: 'Sr VP of Global Marketing & Digital Merchandising',
      bio: 'Elena is a relentless entrepreneur with a deep passion for learning and growing. With expertise in merchandising, e-commerce, and marketing strategy, she has been instrumental in shaping PetStore Direct into a leading platform for grooming professionals.',
    },
    {
      name: 'Ashley V. Hein',
      title: 'Vice President of Product and Quality',
      bio: 'With over a decade of experience in product development, regulatory compliance, and quality management in the animal health and food industries, Ashley Hein is a strategic leader known for driving innovation, optimizing processes, and fostering cross-functional collaboration.',
    },
    {
      name: 'Jared Finegold',
      title: 'Executive Vice President, Corporate Development',
      bio: 'Jared has over twenty years of executive level experience in animal health and is responsible for driving CIMA Animal Health\'s growth through mergers & acquisitions (M&A) and strategic partnerships. He holds an MBA with honors from the Wharton School of the University of Pennsylvania.',
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Leadership</Subheading>
          <Heading as="h2" className="mt-2">
            Our Management Team
          </Heading>
          <Lead className="mt-6 text-gray-600">
            Experienced leaders driving innovation and excellence across the animal health industry.
          </Lead>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((exec) => (
            <div
              key={exec.name}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4A90E2] to-[#2B5A9E]">
                  <Users className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exec.name}</h3>
                  <p className="text-sm font-medium text-[#2B5A9E]">{exec.title}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{exec.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function PartneringSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#2B5A9E] to-[#4A90E2] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('/dot-texture.svg')] opacity-10" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Handshake className="size-5 text-white" />
            <span className="text-sm font-medium text-white">Collaboration</span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Partner with Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Want to collaborate, distribute, or learn more about our companies? Get in touch with our team today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="#contact"
              className="bg-white text-[#2B5A9E] hover:bg-gray-100"
            >
              Contact Us
            </Button>
            <Button
              href="#companies"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              Explore Our Companies
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <Building2 className="mb-4 size-8 text-white" />
            <h3 className="text-lg font-semibold text-white">Distribution Partners</h3>
            <p className="mt-2 text-sm text-white/80">
              Expand your product portfolio with our trusted brands
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <Sparkles className="mb-4 size-8 text-white" />
            <h3 className="text-lg font-semibold text-white">Innovation Partners</h3>
            <p className="mt-2 text-sm text-white/80">
              Collaborate on next-generation animal health solutions
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <TrendingUp className="mb-4 size-8 text-white" />
            <h3 className="text-lg font-semibold text-white">Growth Partners</h3>
            <p className="mt-2 text-sm text-white/80">
              Join us in expanding the animal health market
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Impact</Subheading>
          <Heading as="h2" className="mt-2">
            Driving Excellence Across the Industry
          </Heading>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200">
            <div className="text-4xl font-bold text-[#2B5A9E]">25+</div>
            <div className="mt-2 text-sm font-medium text-gray-600">Years of Experience</div>
          </div>
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200">
            <div className="text-4xl font-bold text-[#2B5A9E]">4</div>
            <div className="mt-2 text-sm font-medium text-gray-600">Leading Companies</div>
          </div>
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200">
            <div className="text-4xl font-bold text-[#2B5A9E]">1000+</div>
            <div className="mt-2 text-sm font-medium text-gray-600">Products & Solutions</div>
          </div>
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200">
            <div className="text-4xl font-bold text-[#2B5A9E]">50+</div>
            <div className="mt-2 text-sm font-medium text-gray-600">Countries Served</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main id="companies">
        <CompaniesSection />
        <div id="team">
          <ManagementTeam />
        </div>
        <PartneringSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
