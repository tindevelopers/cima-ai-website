
import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'PetStore AI is transforming the pet care industry with cutting-edge artificial intelligence solutions for veterinarians, retailers, and pet service providers.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Transforming pet care with AI innovation</Heading>
      <Lead className="mt-6 max-w-3xl">
        We&apos;re on a mission to revolutionize the pet care industry by harnessing the power of artificial intelligence to improve health outcomes, streamline operations, and enhance the lives of pets and their caregivers.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            At PetStore AI, we believe every pet deserves the best care possible. Our mission is to democratize access to advanced veterinary diagnostics, intelligent retail solutions, and data-driven pet services through artificial intelligence. We&apos;re building tools that empower professionals to make better decisions and deliver exceptional care.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Founded by veterinarians, data scientists, and pet enthusiasts, we combine deep industry expertise with cutting-edge AI technology. Our team has developed solutions trusted by over 5,000 veterinary practices, 2,000 retail locations, and 10,000 pet service providers worldwide. We&apos;re passionate about creating a future where technology and compassion work together to improve pet health and happiness.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="PetStore AI team collaboration"
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Advanced AI diagnostics"
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Pet care technology"
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Happy pets and owners"
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
              <dt className="text-sm/6 text-gray-600">Veterinary Practices</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={5} />K+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Retail Partners</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={2} />K+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Pets Helped</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={10} />M+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">AI Models Deployed</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={50} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Leadership Team</Subheading>
      <Heading as="h3" className="mt-2">
        Built by experts who care
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our leadership team brings together decades of experience in veterinary medicine, artificial intelligence, and pet care innovation.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            PetStore AI was founded in 2020 when Dr. Sarah Chen, a veterinary surgeon, partnered with AI researcher Michael Foster after witnessing the potential of machine learning to improve diagnostic accuracy. Together with product leader Marcus Eldridge, they assembled a world-class team passionate about improving pet health outcomes.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Today, our diverse team of 120+ veterinarians, data scientists, engineers, and designers work from offices in San Francisco, London, and Tokyo. We&apos;ve raised $85M from leading investors who share our vision of a future where every pet has access to world-class care powered by AI.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#contact">
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt="PetStore AI headquarters"
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        Our team
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Dr. Sarah Chen"
          description="Co-Founder / CEO"
          img="/team/emily-selman.jpg"
        />
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Marcus Eldridge"
          description="Chief Product Officer"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="Courtney Henry"
          description="Head of Design"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Whitney Francis"
          description="VP Marketing"
          img="/team/whitney-francis.jpg"
        />
        <Person
          name="Leonard Krasner"
          description="Lead AI Researcher"
          img="/team/leonard-krasner.jpg"
        />
        <Person
          name="Nolan Sheffield"
          description="Head of Veterinary Science"
          img="/team/nolan-sheffield.jpg"
        />
        <Person
          name="Dries Vincent"
          description="VP Business Development"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Celeste Vandermark"
          description="Engineering Manager"
          img="/team/celeste-vandermark.jpg"
        />
      </ul>
    </Container>
  )
}

function Values() {
  return (
    <Container className="mt-32">
      <Subheading>Our Values</Subheading>
      <Heading as="h3" className="mt-2">
        Principles that guide us
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We&apos;re committed to building ethical AI solutions that prioritize pet welfare, data privacy, and accessible healthcare.
      </Lead>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-semibold text-gray-900">Pet-First Approach</h3>
          <p className="mt-3 text-sm text-gray-600">
            Every decision we make is guided by what&apos;s best for the animals. We prioritize safety, accuracy, and animal welfare above all else.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-semibold text-gray-900">Ethical AI</h3>
          <p className="mt-3 text-sm text-gray-600">
            We believe in transparent, explainable AI that augments human expertise rather than replacing it. Our models are rigorously tested and validated.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-semibold text-gray-900">Accessibility</h3>
          <p className="mt-3 text-sm text-gray-600">
            Advanced care shouldn&apos;t be limited to those who can afford it. We work to make our technology accessible to practices of all sizes.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-semibold text-gray-900">Data Privacy</h3>
          <p className="mt-3 text-sm text-gray-600">
            Pet health data is sacred. We maintain the highest standards of security and never sell or share data without explicit consent.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-semibold text-gray-900">Continuous Innovation</h3>
          <p className="mt-3 text-sm text-gray-600">
            The field of AI moves quickly, and so do we. We invest heavily in R&D to stay at the forefront of veterinary AI technology.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-semibold text-gray-900">Community Focus</h3>
          <p className="mt-3 text-sm text-gray-600">
            We partner with animal welfare organizations, support veterinary education, and contribute to open-source AI research.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Contact() {
  return (
    <Container className="my-32">
      <div className="rounded-4xl bg-[#2B1E5B] px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <Subheading dark>Get in Touch</Subheading>
          <Heading as="h3" dark className="mt-2">
            Ready to transform your pet care business?
          </Heading>
          <p className="mt-6 text-2xl font-medium text-white/90">
            Join thousands of veterinarians, retailers, and pet service providers who trust PetStore AI to deliver better outcomes.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#" className="bg-white text-[#2B1E5B] hover:bg-gray-100">
              Schedule a Demo
            </Button>
            <Button href="#" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
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
      <Team />
      <Values />
      <Contact />
      <Footer />
    </main>
  )
}
