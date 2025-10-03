
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Companies across the animal health industry trust CIMA\'s AI-powered solutions. Discover how our innovative technology can transform your business.',
}

const tiers = [
  {
    name: 'Starter',
    slug: 'starter',
    description: 'Perfect for small practices and independent professionals.',
    priceMonthly: 299,
    href: 'https://cimaanimalhealth.com/contact',
    highlights: [
      { description: 'AI diagnostic assistance' },
      { description: 'Basic inventory management' },
      { description: 'Email support' },
      { description: 'Monthly analytics reports' },
    ],
    features: [
      { section: 'Features', name: 'AI Diagnostic Tools', value: 'Basic' },
      { section: 'Features', name: 'Inventory Management', value: 'Basic' },
      { section: 'Features', name: 'Customer Analytics', value: true },
      { section: 'Features', name: 'Predictive Insights', value: false },
      { section: 'Features', name: 'CIMA AI integrations', value: false },
      { section: 'Features', name: 'Advanced reporting', value: false },
      { section: 'Features', name: 'Multi-location support', value: false },
      { section: 'Features', name: 'Dedicated account manager', value: false },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'Phone support', value: false },
      { section: 'Support', name: '24/7 priority support', value: false },
    ],
  },
  {
    name: 'Growth',
    slug: 'growth',
    description: 'For growing practices and multi-location businesses.',
    priceMonthly: 799,
    href: 'https://cimaanimalhealth.com/contact',
    highlights: [
      { description: 'Advanced AI diagnostics' },
      { description: 'Smart inventory optimization' },
      { description: 'Predictive analytics' },
      { description: 'Phone & email support' },
      { description: 'Multi-location management' },
    ],
    features: [
      { section: 'Features', name: 'AI Diagnostic Tools', value: 'Advanced' },
      { section: 'Features', name: 'Inventory Management', value: 'Advanced' },
      { section: 'Features', name: 'Customer Analytics', value: true },
      { section: 'Features', name: 'Predictive Insights', value: true },
      { section: 'Features', name: 'CIMA AI integrations', value: true },
      { section: 'Features', name: 'Advanced reporting', value: true },
      { section: 'Features', name: 'Multi-location support', value: '5 locations' },
      { section: 'Features', name: 'Dedicated account manager', value: false },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'Phone support', value: true },
      { section: 'Support', name: '24/7 priority support', value: false },
    ],
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    description: 'For large organizations and enterprise operations.',
    priceMonthly: 1999,
    href: 'https://cimaanimalhealth.com/contact',
    highlights: [
      { description: 'Full AI suite access' },
      { description: 'Enterprise inventory & logistics' },
      { description: 'Custom AI model training' },
      { description: '24/7 priority support' },
      { description: 'Unlimited locations' },
      { description: 'Dedicated account manager' },
    ],
    features: [
      { section: 'Features', name: 'AI Diagnostic Tools', value: 'Enterprise' },
      { section: 'Features', name: 'Inventory Management', value: 'Enterprise' },
      { section: 'Features', name: 'Customer Analytics', value: true },
      { section: 'Features', name: 'Predictive Insights', value: true },
      { section: 'Features', name: 'CIMA AI integrations', value: true },
      { section: 'Features', name: 'Advanced reporting', value: true },
      { section: 'Features', name: 'Multi-location support', value: 'Unlimited' },
      { section: 'Features', name: 'Dedicated account manager', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'Phone support', value: true },
      { section: 'Support', name: '24/7 priority support', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">AI-Powered Solutions for Every Business</Heading>
      <Lead className="mt-6 max-w-3xl">
        Companies across the animal health industry have transformed their operations with CIMA Animal Health. Sign up today and start delivering smarter care with AI innovation.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ${tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>per month</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Start free trial</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Key features:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <CheckIcon className="size-[0.9375rem] shrink-0 fill-[#00d084]" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function FeatureTable() {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected
            className="w-2/5 sm:w-1/5 data-[selected]:table-column max-sm:hidden"
          />
          <col
            data-selected
            className="w-2/5 sm:w-1/5 data-[selected]:table-column max-sm:hidden"
          />
          <col className="w-2/5 sm:w-1/5 max-sm:table-column" />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={tier.slug === 'growth' ? true : undefined}
                className="p-0 data-[selected]:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    Growth
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-[--button-width] rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <button className="group grid w-full grid-cols-[1fr,auto] items-center rounded-md px-2 py-1 data-[focus]:bg-gray-200">
                          {tier.name}
                        </button>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button href={tiers[1].href}>Get started</Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={tier.slug === 'growth' ? true : undefined}
                className="px-0 pb-0 pt-4 data-[selected]:table-cell max-sm:hidden"
              >
                <Button href={tier.href}>Get started</Button>
              </td>
            ))}
          </tr>
        </thead>
        {[
          ['Features', 'section'],
          ['AI Diagnostic Tools', 'feature'],
          ['Inventory Management', 'feature'],
          ['Customer Analytics', 'feature'],
          ['Predictive Insights', 'feature'],
          ['CIMA AI integrations', 'feature'],
          ['Advanced reporting', 'feature'],
          ['Multi-location support', 'feature'],
          ['Dedicated account manager', 'feature'],
          ['Support', 'section'],
          ['Email support', 'feature'],
          ['Phone support', 'feature'],
          ['24/7 priority support', 'feature'],
        ].map(([name, type]) => (
          <Fragment key={name}>
            {type === 'section' && <SectionRow name={name} />}
            {type === 'feature' && <FeatureRow name={name} />}
          </Fragment>
        ))}
      </table>
    </Container>
  )
}

function SectionRow({ name }: { name: string }) {
  return (
    <tbody>
      <tr>
        <th
          scope="colgroup"
          colSpan={4}
          className="px-0 pb-0 pt-10 text-sm/6 font-medium text-gray-950"
        >
          {name}
        </th>
      </tr>
    </tbody>
  )
}

function FeatureRow({ name }: { name: string }) {
  let features = tiers.map((tier) => {
    let value = tier.features.find((feature) => feature.name === name)?.value

    return (
      <td
        key={tier.slug}
        data-selected={tier.slug === 'growth' ? true : undefined}
        className="p-0 data-[selected]:table-cell max-sm:hidden"
      >
        {value === true ? (
          <>
            <CheckIcon className="size-4 fill-[#00d084]" />
            <span className="sr-only">Included</span>
          </>
        ) : value === false || value === undefined ? (
          <>
            <MinusIcon className="size-4 fill-gray-400" />
            <span className="sr-only">Not included</span>
          </>
        ) : (
          <div className="text-sm/6 text-gray-950">{value}</div>
        )}
      </td>
    )
  })

  return (
    <tbody>
      <tr>
        <th
          scope="row"
          className="px-0 pb-4 pt-4 text-sm/6 font-normal text-gray-600"
        >
          {name}
        </th>
        {features}
      </tr>
    </tbody>
  )
}

function Testimonial() {
  return (
    <div className="relative pb-16 pt-20 sm:py-24">
      <Container>
        <figure className="mx-auto max-w-4xl">
          <blockquote>
            <p className="relative text-3xl tracking-tight text-gray-950 sm:text-4xl">
              <span aria-hidden="true" className="absolute -translate-x-full">
                "
              </span>
              Thanks to CIMA Animal Health, we're finding new opportunities and delivering better care that we never would have achieved without AI-powered innovation.
              <span aria-hidden="true" className="absolute">
                "
              </span>
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <p className="text-sm/6 font-medium text-gray-950">
              Dr. Jennifer Martinez
            </p>
            <p className="text-sm/6 font-medium text-gray-600">
              Veterinary Practice Owner, Austin Animal Hospital
            </p>
          </figcaption>
        </figure>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="h3" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mb-32 mt-16 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold text-gray-950">
              What makes CIMA's AI solutions different?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              CIMA Animal Health is pioneering the integration of AI across the entire animal health industry—from veterinary diagnostics to inventory management and customer insights. Our solutions are built on decades of industry expertise combined with cutting-edge machine learning technology.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold text-gray-950">
              Can I try before committing?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes! All plans include a 30-day free trial with full access to features. No credit card required to start.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold text-gray-950">
              Do you offer custom enterprise solutions?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Absolutely. Our Enterprise plan can be customized to meet your specific needs, including custom AI model training, dedicated infrastructure, and white-label options. Contact our team to discuss your requirements.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold text-gray-950">
              What kind of support do you provide?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Support varies by plan, from email support on Starter to 24/7 priority support with dedicated account managers on Enterprise. All customers get access to our comprehensive knowledge base and training resources.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

import { Fragment } from 'react'

export default function Pricing() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <FeatureTable />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
