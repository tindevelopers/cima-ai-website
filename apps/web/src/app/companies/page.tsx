
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Microscope, Heart, Scissors, Package, Stethoscope, Dog, ShoppingBag, Syringe, Pill, Activity, Sparkles, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Companies',
  description:
    'CIMA Animal Health brings together industry-leading companies: Creative Science, Revival Animal Health, PetStore Direct, and Med-Vet International.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Industry-Leading Companies, Trusted by Professionals</Heading>
      <Lead className="mt-6 max-w-3xl">
        CIMA Animal Health is more than just a portfolio—we&apos;re a powerhouse of expertise, research, and trusted solutions. Our family of companies delivers innovative products and services that professionals across the industry rely on every day.
      </Lead>
    </Container>
  )
}

function CreativeScience() {
  return (
    <Container className="mt-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Microscope className="size-10 text-[#2B1E5B]" />
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">Creative Science</h2>
              <p className="text-sm text-gray-600 mt-1">Science-Backed Veterinary Solutions</p>
            </div>
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            Creative Science is committed to delivering smarter care across species through science-backed, veterinarian-trusted solutions. Headquartered in Orange City, Iowa, Creative Science ensures veterinarians, owners, and producers have access to essential treatment solutions to help animals thrive.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <Dog className="size-5 text-[#B4D13C] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Equine & Companion Animal Health</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Specialized solutions for horses, dogs, cats, and other companion animals with a focus on performance, recovery, and wellness.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Activity className="size-5 text-[#B4D13C] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Orthobiologic Therapies</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Advanced pain management and equine asthma treatments through the recent acquisition of Astaria Global, bringing groundbreaking technologies to veterinary care.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="size-5 text-[#B4D13C] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Pet Identification Technology</h3>
                <p className="text-sm text-gray-600 mt-1">
                  BuddyID microchip brand with over 30 years of experience in global pet recovery, offering free lifetime registration and temperature-sensing capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl bg-gradient-to-br from-[#2B1E5B]/10 to-[#5B3D8F]/10 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio of Trusted Brands</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                Arenus Animal Health
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                Kinetic Vet
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                Banixx
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                Equine Medical & Surgical Associates
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                Infiniti Medical
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                Orthomed
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                Breeder&apos;s Choice
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                Exodus Breeders
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                BuddyID (Microchip Technology)
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                Astaria Global (Acquired 2025)
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm text-gray-600 italic">
              &ldquo;Welcoming Astaria Global to the Creative Science family is an exciting step forward in our continued investment in equine health. Together, we&apos;re better equipped to serve the needs of horses, their owners, and the professionals who care for them.&rdquo;
            </p>
            <p className="text-sm font-semibold text-gray-900 mt-3">— Charlie Passantino, President of Creative Science</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

function RevivalAnimalHealth() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 mt-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="size-10 text-[#B4D13C]" />
              <div>
                <h2 className="text-3xl font-semibold text-gray-900">Revival Animal Health</h2>
                <p className="text-sm text-gray-600 mt-1">Trusted Solutions for Over 35 Years</p>
              </div>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              For more than three decades, Revival Animal Health has been delivering trusted solutions and expert guidance to pet professionals. From vaccines to supplements and everything in between, Revival provides comprehensive support for veterinarians, owners, and producers who are dedicated to helping animals thrive.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Syringe className="size-5 text-[#2B1E5B] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Comprehensive Vaccine Solutions</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Complete range of vaccines for dogs, cats, and other companion animals, ensuring preventive care is accessible and reliable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Pill className="size-5 text-[#2B1E5B] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Nutritional Supplements</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Science-backed supplements designed to support optimal health, from joint care to digestive wellness and immune support.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Stethoscope className="size-5 text-[#2B1E5B] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Guidance & Education</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Dedicated support team providing professional advice, educational resources, and best practices for animal care professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:order-1 space-y-6">
            <div className="aspect-video overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Revival Animal Health products"
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Professionals Choose Revival</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Shield className="size-4 text-[#B4D13C] mt-0.5 flex-shrink-0" />
                  <span>35+ years of proven reliability and trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="size-4 text-[#B4D13C] mt-0.5 flex-shrink-0" />
                  <span>Comprehensive product range from prevention to treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="size-4 text-[#B4D13C] mt-0.5 flex-shrink-0" />
                  <span>Expert support and educational resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="size-4 text-[#B4D13C] mt-0.5 flex-shrink-0" />
                  <span>Commitment to animal welfare and ethical practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function PetStoreDirect() {
  return (
    <Container className="mt-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Scissors className="size-10 text-[#5B3D8F]" />
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">PetStore Direct</h2>
              <p className="text-sm text-gray-600 mt-1">Professional Grooming Excellence</p>
            </div>
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            PetStore Direct is dedicated to providing grooming professionals with the trusted supplies they need to deliver exceptional results. From premium shampoos and conditioners to professional-grade tools and equipment, PetStore Direct ensures groomers have access to the best products in the industry.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <Sparkles className="size-5 text-[#B4D13C] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Premium Grooming Products</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Carefully curated selection of shampoos, conditioners, styling products, and treatments designed for professional use and superior results.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="size-5 text-[#B4D13C] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Professional Equipment</h3>
                <p className="text-sm text-gray-600 mt-1">
                  High-quality grooming tools, dryers, tables, and accessories that meet the demanding needs of busy grooming professionals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShoppingBag className="size-5 text-[#B4D13C] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Reliable Supply Chain</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Consistent availability and fast delivery ensure grooming businesses never run out of essential supplies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt="Professional grooming supplies"
              src="/company/3.jpg"
              className="block size-full object-cover"
            />
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#5B3D8F]/10 to-[#B4D13C]/10 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Serving Grooming Professionals</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              PetStore Direct understands the unique needs of grooming professionals. We partner with the industry&apos;s leading brands to provide products that deliver consistent, beautiful results while being gentle on pets. Our commitment to quality and service has made us a trusted partner for grooming salons, mobile groomers, and pet care facilities nationwide.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

function MedVetInternational() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 mt-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Package className="size-10 text-[#2B1E5B]" />
              <div>
                <h2 className="text-3xl font-semibold text-gray-900">Med-Vet International</h2>
                <p className="text-sm text-gray-600 mt-1">Trusted Since 1984</p>
              </div>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Since 1984, Med-Vet International (MVI) has been a leading provider of high-quality medical and veterinary supplies. With over four decades of experience, MVI offers reliable, affordable solutions that veterinary professionals trust for their daily practice needs.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Stethoscope className="size-5 text-[#B4D13C] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Complete Medical Supplies</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Comprehensive range of medical supplies, instruments, and equipment for veterinary practices of all sizes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="size-5 text-[#B4D13C] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Quality & Reliability</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Decades of industry expertise ensure every product meets the highest standards for veterinary care.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="size-5 text-[#B4D13C] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Affordable Solutions</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Competitive pricing without compromising quality, making essential supplies accessible to all practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:order-1 space-y-6">
            <div className="aspect-video overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Med-Vet International supplies"
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">40+ Years of Excellence</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Med-Vet International has built its reputation on reliability, quality, and exceptional customer service. From surgical instruments to diagnostic supplies, MVI provides everything veterinary professionals need to deliver outstanding patient care.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                  Established 1984
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                  Thousands of products in stock
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                  Fast, reliable shipping
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#2B1E5B]"></span>
                  Dedicated customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Partnership() {
  return (
    <Container className="my-32">
      <div className="rounded-4xl bg-[#2B1E5B] px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <Subheading dark>Partner With Us</Subheading>
          <Heading as="h3" dark className="mt-2">
            Join the CIMA family of companies
          </Heading>
          <p className="mt-6 text-2xl font-medium text-white/90">
            Want to collaborate, distribute, or learn more about our companies? We welcome like-minded organizations to join us in shaping the future of animal health.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/about" className="bg-white text-[#2B1E5B] hover:bg-gray-100">
              Learn About CIMA
            </Button>
            <Button href="#" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Companies() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <CreativeScience />
      <RevivalAnimalHealth />
      <PetStoreDirect />
      <MedVetInternational />
      <Partnership />
      <Footer />
    </main>
  )
}
