
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'CIMA Animal Health is a unified force transforming the animal health industry with AI-powered solutions across veterinary medicine, professional products, and services.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">A Unified Force in Animal Health</Heading>
      <Lead className="mt-6 max-w-3xl">
        CIMA Animal Health brings together industry-leading companies to deliver innovative, AI-powered solutions that professionals trust. With decades of expertise and a commitment to animal well-being, we're pioneering the future of animal health care.
      </Lead>
    </Container>
  )
}

function Story() {
  return (
    <Container className="mt-32">
      <Subheading>Our Story</Subheading>
      <Heading as="h2" className="mt-2">
        Building a powerhouse of expertise and innovation
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        CIMA Animal Health was founded on the belief that the animal health industry deserves better—better products, better technology, and better support for the professionals who dedicate their lives to animal care.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <p className="text-base/7 text-gray-600">
            Our journey began with the acquisition of Revival Animal Health, a trusted name in professional pet products for over 35 years. Recognizing the opportunity to create something greater, we expanded our portfolio to include Creative Science, PetStore Direct, and Med-Vet International—each bringing unique strengths and decades of industry leadership.
          </p>
          <p className="mt-6 text-base/7 text-gray-600">
            What sets CIMA apart is our pioneering integration of artificial intelligence across all our companies. We're not just distributing products—we're revolutionizing how veterinarians diagnose conditions, how retailers manage inventory, and how professionals deliver exceptional care.
          </p>
        </div>
        <div>
          <p className="text-base/7 text-gray-600">
            Under the leadership of President & CEO Lynn Snodgrass, who brings over 25 years of veterinary medicine and business expertise, CIMA has become a pioneer in AI-powered animal health solutions. Our team combines deep industry knowledge with cutting-edge technology to create tools that make a real difference.
          </p>
          <p className="mt-6 text-base/7 text-gray-600">
            Today, CIMA Animal Health serves thousands of veterinary professionals, retailers, and animal care providers across multiple species, with a strong focus on dogs, cats, horses, and beyond. We're committed to continuous innovation, ethical practices, and empowering those who care for animals with the tools they need to thrive.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Mission() {
  return (
    <Container className="mt-32">
      <Subheading>Our Mission</Subheading>
      <Heading as="h2" className="mt-2">
        Elevating animal health through innovation and expertise
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        At CIMA Animal Health, our mission is to improve the lives of animals and those who care for them through creative, science-backed solutions and pioneering AI technology.
      </Lead>
      <div className="mt-12 space-y-8">
        <div className="border-l-4 border-[#1D3D7C] pl-6">
          <h3 className="text-xl font-semibold text-gray-950">Innovation First</h3>
          <p className="mt-2 text-base/7 text-gray-600">
            We're pioneering the integration of artificial intelligence in animal health, from AI-enhanced diagnostics to predictive inventory management and personalized customer insights.
          </p>
        </div>
        <div className="border-l-4 border-[#00d084] pl-6">
          <h3 className="text-xl font-semibold text-gray-950">Quality & Trust</h3>
          <p className="mt-2 text-base/7 text-gray-600">
            Every product we manufacture and distribute meets the highest standards of quality and safety, backed by rigorous testing and decades of industry expertise.
          </p>
        </div>
        <div className="border-l-4 border-[#1D3D7C] pl-6">
          <h3 className="text-xl font-semibold text-gray-950">Professional Support</h3>
          <p className="mt-2 text-base/7 text-gray-600">
            We empower veterinary professionals, retailers, and service providers with education, collaboration, and cutting-edge tools to enhance patient care and business success.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Values() {
  return (
    <Container className="mt-32">
      <Subheading>Core Values</Subheading>
      <Heading as="h2" className="mt-2">
        The principles that guide everything we do
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-xl font-semibold text-gray-950">Compassion</h3>
          <p className="mt-4 text-base/7 text-gray-600">
            We prioritize the well-being of animals and those who care for them, ensuring all our solutions are ethical, responsible, and focused on improving animal health outcomes.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-xl font-semibold text-gray-950">Innovation</h3>
          <p className="mt-4 text-base/7 text-gray-600">
            We embrace continuous improvement and cutting-edge AI technology to advance animal health care and deliver solutions that professionals can rely on.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-xl font-semibold text-gray-950">Mentorship</h3>
          <p className="mt-4 text-base/7 text-gray-600">
            We support veterinary professionals through education, knowledge sharing, and collaboration to enhance patient care and professional development.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-xl font-semibold text-gray-950">Authenticity</h3>
          <p className="mt-4 text-base/7 text-gray-600">
            We stay true to our mission, fostering trust through honesty, transparency, and a genuine commitment to improving animal health across the industry.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Leadership() {
  return (
    <Container className="mt-32">
      <Subheading>Leadership Team</Subheading>
      <Heading as="h2" className="mt-2">
        Experienced leaders driving innovation
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-lg font-semibold text-gray-950">Lynn Snodgrass</h3>
          <p className="text-sm text-[#1D3D7C]">President & CEO</p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Over 25 years of experience in veterinary medicine and business leadership, driving CIMA's growth and commitment to revolutionizing animal health through AI innovation.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-lg font-semibold text-gray-950">Kyle Hemenover</h3>
          <p className="text-sm text-[#1D3D7C]">CFO</p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Strategic financial leader with 18+ years of experience, bringing global perspective and expertise in organizational development and high-caliber team building.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-lg font-semibold text-gray-950">Joel Harrington</h3>
          <p className="text-sm text-[#1D3D7C]">President, Revival Animal Health</p>
          <p className="mt-4 text-sm/6 text-gray-600">
            20+ years of leadership in sales, operations, and digital marketing, driving growth and fostering cross-functional collaboration with authentic energy.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-lg font-semibold text-gray-950">Domenico Ponti</h3>
          <p className="text-sm text-[#1D3D7C]">President, PetStore Direct</p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Visionary entrepreneur and co-founder of PetStore Direct, reshaping the pet grooming industry with innovation, efficiency, and transformational leadership.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-lg font-semibold text-gray-950">Tony Moore</h3>
          <p className="text-sm text-[#1D3D7C]">President, Med-Vet International</p>
          <p className="mt-4 text-sm/6 text-gray-600">
            Deep expertise in veterinary manufacturing and distribution, fostering a culture of continuous improvement and delivering meaningful value to customers.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-lg font-semibold text-gray-950">Jared Finegold</h3>
          <p className="text-sm text-[#1D3D7C]">EVP, Corporate Development</p>
          <p className="mt-4 text-sm/6 text-gray-600">
            20+ years in animal health M&A and strategic partnerships, with honors MBA from Wharton and board service at Morris Animal Foundation.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Story />
      <Mission />
      <Values />
      <Leadership />
      <Footer />
    </main>
  )
}
