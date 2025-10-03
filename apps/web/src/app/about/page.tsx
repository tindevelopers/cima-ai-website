
import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Heart, Lightbulb, Users, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'CIMA Animal Health is a unified force in animal health, elevating care through innovation, compassion, and decades of industry expertise.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">A Unified Force in Animal Health</Heading>
      <Lead className="mt-6 max-w-3xl">
        CIMA Animal Health brings together industry-leading companies to deliver innovative solutions that professionals trust. With a strong foundation in science and a passion for animal well-being, we&apos;re elevating care to new heights.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our Mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            At CIMA Animal Health, we are driven by a singular mission: to elevate animal health through innovation, quality, and unwavering commitment to our customers. We provide essential products and technologies that support the health of animals across the industry, empowering veterinary professionals, dealers, distributors, and animal owners with the tools they need to succeed.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Backed by decades of industry expertise, CIMA&apos;s portfolio spans veterinary medicine, retail, and professional grooming. We manufacture and distribute both proprietary and national brands, ensuring access to high-quality products across multiple species, with a strong focus on dogs, cats, horses, and beyond. Our family of companies—Creative Science, Revival Animal Health, PetStore Direct, and Med-Vet International—each play a vital role in delivering trusted solutions that strengthen the bond between people and animals.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="CIMA Animal Health team collaboration"
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Veterinary care excellence"
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Animal health innovation"
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Trusted animal care solutions"
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Our Impact</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Years of Experience</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={35} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Industry Companies</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={4} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Professionals Served</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={10} />K+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Product Categories</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={100} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function CoreValues() {
  return (
    <Container className="mt-32">
      <Subheading>Our Core Values</Subheading>
      <Heading as="h3" className="mt-2">
        Principles that guide everything we do
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        At CIMA Animal Health, our values are more than words—they&apos;re the foundation of how we serve animals, professionals, and communities every day.
      </Lead>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="size-8 text-[#B4D13C]" />
            <h3 className="text-lg font-semibold text-gray-900">Compassion</h3>
          </div>
          <p className="text-sm text-gray-600">
            We prioritize the well-being of animals and those who care for them, ensuring all our solutions are ethical and responsible. Every decision is guided by what&apos;s best for animal health and welfare.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="size-8 text-[#2B1E5B]" />
            <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
          </div>
          <p className="text-sm text-gray-600">
            We embrace continuous improvement and cutting-edge solutions to advance animal health. From AI-powered diagnostics to breakthrough therapies, we&apos;re always pushing boundaries.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center gap-3 mb-4">
            <Users className="size-8 text-[#5B3D8F]" />
            <h3 className="text-lg font-semibold text-gray-900">Mentorship</h3>
          </div>
          <p className="text-sm text-gray-600">
            We support veterinary professionals with knowledge, education, and collaboration to enhance patient care. Building expertise and sharing insights strengthens our entire community.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="size-8 text-[#2B1E5B]" />
            <h3 className="text-lg font-semibold text-gray-900">Authenticity</h3>
          </div>
          <p className="text-sm text-gray-600">
            We stay true to our mission, fostering trust through honesty, transparency, and a genuine commitment to improving animal health. Our word is our bond.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Leadership() {
  return (
    <Container className="mt-32">
      <Subheading>Leadership</Subheading>
      <Heading as="h3" className="mt-2">
        Guided by experience and passion
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="size-16 rounded-full bg-gradient-to-br from-[#2B1E5B] to-[#5B3D8F] flex items-center justify-center text-white text-2xl font-bold">
                  LS
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Lynn Snodgrass</h3>
                <p className="text-sm text-gray-600 mt-1">President & CEO</p>
                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  &ldquo;At CIMA, we are driven by a singular mission: to elevate animal health through innovation, quality, and unwavering commitment to our customers. Compassion, Innovation, Mentorship, and Authenticity are the values that guide us, and we are fortunate to have a team of dedicated professionals who share our vision.&rdquo;
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm/6 text-gray-600">
            Under Lynn&apos;s leadership, CIMA Animal Health has grown into a powerhouse of expertise, research, and trusted solutions. Her vision brings together our family of companies to create a unified force dedicated to advancing animal care and empowering those who serve animals every day.
          </p>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt="CIMA Animal Health leadership"
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function AIInnovation() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-32 mt-32">
      <Container>
        <Subheading>Pioneering AI in Animal Health</Subheading>
        <Heading as="h3" className="mt-2">
          Leading the future of veterinary care
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          CIMA Animal Health is at the forefront of integrating artificial intelligence into animal care, combining our decades of industry expertise with cutting-edge technology to revolutionize how we serve animals and the professionals who care for them.
        </Lead>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-gray-900">AI-Powered Diagnostics</h3>
            <p className="mt-3 text-sm text-gray-600">
              Our advanced imaging analysis and diagnostic tools leverage machine learning to detect anomalies faster and more accurately, providing veterinarians with powerful second opinions backed by thousands of analyzed cases.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-gray-900">Smart Inventory Management</h3>
            <p className="mt-3 text-sm text-gray-600">
              Through predictive analytics and demand forecasting, we help retailers and veterinary practices optimize stock levels, reduce waste, and ensure critical products are always available when needed.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-gray-900">Personalized Care Solutions</h3>
            <p className="mt-3 text-sm text-gray-600">
              AI algorithms analyze pet profiles, health history, and behavioral patterns to recommend optimal products, treatments, and care plans tailored to each individual animal&apos;s unique needs.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function JoinUs() {
  return (
    <Container className="my-32">
      <div className="rounded-4xl bg-[#2B1E5B] px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <Subheading dark>Join the CIMA Family</Subheading>
          <Heading as="h3" dark className="mt-2">
            Be part of something bigger
          </Heading>
          <p className="mt-6 text-2xl font-medium text-white/90">
            We&apos;re always looking for passionate individuals and like-minded companies to join us in shaping the future of animal health. Whether you&apos;re seeking a career opportunity or exploring partnership possibilities, we&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/companies" className="bg-white text-[#2B1E5B] hover:bg-gray-100">
              Explore Our Companies
            </Button>
            <Button href="#" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <CoreValues />
      <Leadership />
      <AIInnovation />
      <JoinUs />
      <Footer />
    </main>
  )
}
