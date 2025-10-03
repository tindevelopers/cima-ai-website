
// Main page - Development branch deployment test
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
    'AI-driven tools transforming the Pet Care Industry. From veterinary diagnostics to retail optimization and pet services management.',
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
              className="flex items-center gap-1 rounded-full bg-[#2B1E5B]/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-[#2B1E5B]/50"
            >
              Introducing AI-Powered Pet Health Insights
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            AI-Driven Tools for Pet Care Excellence
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Leading-edge AI solutions transforming veterinary care, retail operations, and pet services worldwide.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#services">Get Started</Button>
            <Button variant="secondary" href="#quick-wins">
              Explore Solutions
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function VeterinaryServices() {
  return (
    <Container>
      <Subheading>For Veterinary Professionals</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Advanced AI diagnostics and practice management
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Diagnostics"
          title="AI Imaging Analysis"
          description="Subscription-based diagnostic imaging with machine learning that detects anomalies 20% faster. Get second opinions powered by thousands of analyzed cases."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#2B1E5B]/10 to-[#5B3D8F]/10">
              <Microscope className="size-32 text-[#2B1E5B]" strokeWidth={1} />
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Management"
          title="All-in-One Practice Platform"
          description="Complete AI-powered practice management: scheduling, electronic health records, billing, and automated client communications in one seamless interface."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#5B3D8F]/10 to-[#B4D13C]/10">
              <Activity className="size-32 text-[#5B3D8F]" strokeWidth={1} />
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Telemedicine"
          title="AI-Powered Remote Care"
          description="Virtual consultations with AI triage that prioritizes urgent cases and provides preliminary assessments before appointments."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#B4D13C]/10 to-[#2B1E5B]/10">
              <Video className="size-32 text-[#2B1E5B]" strokeWidth={1} />
            </div>
          }
          className="lg:col-span-3 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Education"
          title="Continuing Education Hub"
          description="AI-powered training modules that adapt to your learning pace, track certifications, and recommend courses based on your practice specialty."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#2B1E5B]/10 to-[#B4D13C]/10">
              <GraduationCap className="size-32 text-[#5B3D8F]" strokeWidth={1} />
            </div>
          }
          className="max-lg:rounded-b-4xl lg:col-span-3 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function RetailServices() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>For Retail Locations</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Smart products and personalized shopping experiences
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Smart Products"
            title="Connected Pet Tech"
            description="IoT-enabled feeders, toys, and health monitors that provide real-time data and insights to pet owners through our unified app."
            graphic={
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                <Sparkles className="size-32 text-white/80" strokeWidth={1} />
              </div>
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Personalization"
            title="AI Recommendations"
            description="Machine learning algorithms that analyze purchase history, pet profiles, and seasonal trends to suggest the perfect products."
            graphic={
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                <Brain className="size-32 text-white/80" strokeWidth={1} />
              </div>
            }
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Inventory"
            title="Demand Forecasting"
            description="Predictive analytics that optimize stock levels, reduce waste, and ensure you never run out of bestsellers."
            graphic={
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                <Boxes className="size-32 text-white/80" strokeWidth={1} />
              </div>
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Automation"
            title="Self-Service Stations"
            description="Automated grooming bays with AI monitoring for safety, plus self-checkout kiosks that speed up transactions."
            graphic={
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                <Bot className="size-32 text-white/80" strokeWidth={1} />
              </div>
            }
            className="lg:col-span-2"
          />
          <BentoCard
            dark
            eyebrow="Subscriptions"
            title="AI-Curated Boxes"
            description="Monthly subscription boxes personalized by AI based on pet age, breed, preferences, and health needs."
            graphic={
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                <Package className="size-32 text-white/80" strokeWidth={1} />
              </div>
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function PetServices() {
  return (
    <Container className="mt-32">
      <Subheading>For Pet Services</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Optimize operations and deliver exceptional pet care
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-2">
        <BentoCard
          eyebrow="Boarding"
          title="Smart Facility Management"
          description="AI scheduling optimizes kennel allocation, monitors pet behavior through cameras, and sends automated updates to owners with photos and videos."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#2B1E5B]/10 to-[#5B3D8F]/10">
              <HomeIcon className="size-32 text-[#2B1E5B]" strokeWidth={1} />
            </div>
          }
          fade={['bottom']}
          className="rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Dog Walking"
          title="Route Optimization & Safety"
          description="AI-powered route planning considers weather, traffic, and pet energy levels. Real-time GPS tracking and safety alerts for peace of mind."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#5B3D8F]/10 to-[#B4D13C]/10">
              <Dog className="size-32 text-[#5B3D8F]" strokeWidth={1} />
            </div>
          }
          fade={['bottom']}
          className="rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Training"
          title="AI Behavioral Programs"
          description="Personalized training plans powered by behavioral AI. Track progress, get video analysis feedback, and adjust techniques in real-time."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#B4D13C]/10 to-[#2B1E5B]/10">
              <GraduationCap className="size-32 text-[#2B1E5B]" strokeWidth={1} />
            </div>
          }
          className="rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Pet Sitting"
          title="Smart Matching Platform"
          description="AI algorithms match pets with ideal sitters based on experience, personality fit, and specific care requirements. Automated booking and payments."
          graphic={
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#2B1E5B]/10 to-[#B4D13C]/10">
              <Users className="size-32 text-[#5B3D8F]" strokeWidth={1} />
            </div>
          }
          className="rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function ROISection() {
  return (
    <Container className="mt-32">
      <Subheading>Proven Results</Subheading>
      <Heading as="h3" className="mt-2">
        Real ROI across the industry
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our AI solutions deliver measurable results for businesses and pet owners alike.
      </Lead>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Retail Store */}
        <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5">
          <div className="flex items-center gap-3">
            <ShoppingCart className="size-8 text-[#2B1E5B]" />
            <h3 className="text-xl font-semibold text-gray-900">Retail Store</h3>
          </div>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="size-5 text-[#B4D13C] mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">AI Inventory Management</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  <AnimatedNumber start={0} end={25} />% Cost Reduction
                </p>
                <p className="text-xs text-gray-500 mt-1">Lower carrying costs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign className="size-5 text-[#B4D13C] mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">Personalized Recommendations</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  <AnimatedNumber start={0} end={35} />% Higher Sales
                </p>
                <p className="text-xs text-gray-500 mt-1">Average transaction increase</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="size-5 text-[#B4D13C] mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">Automated Customer Service</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  <AnimatedNumber start={0} end={60} />% Cost Savings
                </p>
                <p className="text-xs text-gray-500 mt-1">Support cost reduction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Veterinary Practice */}
        <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5">
          <div className="flex items-center gap-3">
            <Stethoscope className="size-8 text-[#5B3D8F]" />
            <h3 className="text-xl font-semibold text-gray-900">Veterinary Practice</h3>
          </div>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-3">
              <Clock className="size-5 text-[#B4D13C] mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">AI Documentation</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  <AnimatedNumber start={0} end={2} /> Hours Saved Daily
                </p>
                <p className="text-xs text-gray-500 mt-1">10 more appointments per week</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="size-5 text-[#B4D13C] mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">Automated Reminders</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  <AnimatedNumber start={0} end={40} />% More Visits
                </p>
                <p className="text-xs text-gray-500 mt-1">Preventive care increase</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Activity className="size-5 text-[#B4D13C] mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">Diagnostic AI</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  <AnimatedNumber start={0} end={20} />% Better Detection
                </p>
                <p className="text-xs text-gray-500 mt-1">Early disease identification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pet Owner */}
        <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5">
          <div className="flex items-center gap-3">
            <Heart className="size-8 text-[#B4D13C]" />
            <h3 className="text-xl font-semibold text-gray-900">Pet Owner</h3>
          </div>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-3">
              <DollarSign className="size-5 text-[#B4D13C] mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">Early Disease Detection</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  $<AnimatedNumber start={0} end={3} />,000+ Saved
                </p>
                <p className="text-xs text-gray-500 mt-1">Emergency care prevention</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Activity className="size-5 text-[#B4D13C] mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">Optimal Nutrition</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  <AnimatedNumber start={0} end={30} />% Reduction
                </p>
                <p className="text-xs text-gray-500 mt-1">Obesity-related conditions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="size-5 text-[#B4D13C] mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">Behavioral Monitoring</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">Prevention</p>
                <p className="text-xs text-gray-500 mt-1">Anxiety-related damage avoided</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function EmergingTrends() {
  return (
    <div className="bg-linear-to-b from-white to-gray-100 py-32 mt-32">
      <Container>
        <Subheading>The Future of Pet Care</Subheading>
        <Heading as="h3" className="mt-2">
          Emerging trends: Next 3-5 years
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Innovation never stops. Here&apos;s what&apos;s coming next in pet care technology.
        </Lead>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg hover:ring-[#2B1E5B]/20">
            <Dna className="size-10 text-[#2B1E5B]" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">AI Pet Cloning</h3>
            <p className="mt-2 text-sm text-gray-600">
              Digital twins simulate health scenarios to predict and prevent diseases before they occur.
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg hover:ring-[#2B1E5B]/20">
            <Brain className="size-10 text-[#5B3D8F]" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Emotional AI</h3>
            <p className="mt-2 text-sm text-gray-600">
              Advanced computer vision understands pet emotions from facial expressions and body language.
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg hover:ring-[#2B1E5B]/20">
            <Microscope className="size-10 text-[#B4D13C]" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Preventive Genomics</h3>
            <p className="mt-2 text-sm text-gray-600">
              CRISPR technology eliminates hereditary diseases before pets are born.
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg hover:ring-[#2B1E5B]/20">
            <Bot className="size-10 text-[#2B1E5B]" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Autonomous Care</h3>
            <p className="mt-2 text-sm text-gray-600">
              Robots handle feeding, play sessions, and waste cleanup with minimal intervention.
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg hover:ring-[#2B1E5B]/20">
            <Sparkles className="size-10 text-[#5B3D8F]" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Metaverse Pets</h3>
            <p className="mt-2 text-sm text-gray-600">
              Virtual companions provide companionship while collecting real-world health insights.
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg hover:ring-[#2B1E5B]/20">
            <Activity className="size-10 text-[#B4D13C]" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Predictive Health</h3>
            <p className="mt-2 text-sm text-gray-600">
              AI predicts health issues weeks in advance through continuous biometric monitoring.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function QuickWins() {
  return (
    <Container className="mt-32 pb-32">
      <Subheading>Quick Wins</Subheading>
      <Heading as="h3" className="mt-2">
        Get started today
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Choose your path and see results quickly with our proven implementation strategies.
      </Lead>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* For Retailers */}
        <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="size-8 text-[#2B1E5B]" />
            <h3 className="text-xl font-semibold text-gray-900">For Retailers</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#B4D13C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">AI Inventory Management</p>
                <p className="text-xs text-gray-600 mt-1">6-month ROI guarantee</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#B4D13C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">Customer Service Chatbot</p>
                <p className="text-xs text-gray-600 mt-1">Immediate impact on support costs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#B4D13C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">Personalized Email Campaigns</p>
                <p className="text-xs text-gray-600 mt-1">30% open rate increase</p>
              </div>
            </div>
          </div>
          <Button className="w-full mt-6" href="#services">Learn More</Button>
        </div>

        {/* For Vets */}
        <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5">
          <div className="flex items-center gap-3 mb-6">
            <Stethoscope className="size-8 text-[#5B3D8F]" />
            <h3 className="text-xl font-semibold text-gray-900">For Veterinarians</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#B4D13C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">AI Documentation Software</p>
                <p className="text-xs text-gray-600 mt-1">Save 2 hours daily per vet</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#B4D13C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">Telemedicine with AI Triage</p>
                <p className="text-xs text-gray-600 mt-1">Expand patient base remotely</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#B4D13C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">AI Imaging Analysis</p>
                <p className="text-xs text-gray-600 mt-1">Second opinions for accuracy</p>
              </div>
            </div>
          </div>
          <Button className="w-full mt-6" href="#services">Learn More</Button>
        </div>

        {/* For Pet Parents */}
        <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="size-8 text-[#B4D13C]" />
            <h3 className="text-xl font-semibold text-gray-900">For Pet Parents</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#B4D13C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">Smart Health Collar</p>
                <p className="text-xs text-gray-600 mt-1">24/7 health monitoring</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#B4D13C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">AI Diet Recommendations</p>
                <p className="text-xs text-gray-600 mt-1">Personalized nutrition plans</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#B4D13C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">Automated Feeding System</p>
                <p className="text-xs text-gray-600 mt-1">Perfect portion control</p>
              </div>
            </div>
          </div>
          <Button className="w-full mt-6" href="#services">Learn More</Button>
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main id="services">
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32 mt-10">
          <VeterinaryServices />
        </div>
        <RetailServices />
        <div className="bg-linear-to-b from-white to-gray-50 py-32">
          <PetServices />
        </div>
        <ROISection />
        <EmergingTrends />
        <QuickWins />
      </main>
      <Footer />
    </div>
  )
}
