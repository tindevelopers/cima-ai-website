
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { Subheading } from '@/components/text'

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <Subheading>Partner with us</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Join the CIMA family
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-sm text-sm/6 text-gray-600">
        Want to collaborate, distribute, or learn more about our companies? Get in touch with our team today.
      </p>
      <div className="mt-6">
        <Button href="https://cimaanimalhealth.com/contact">Contact Us</Button>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-hover:text-gray-950/75"
      />
    </li>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <CallToAction />
          <div className="relative h-px bg-gray-950/10" />
          <div className="relative py-16">
            <div className="flex flex-col items-start justify-between gap-y-4 sm:flex-row sm:items-center">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
              <p className="text-sm/6 text-gray-600">
                &copy; {new Date().getFullYear()} CIMA Animal Health. All rights reserved.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:mt-24">
              <div>
                <SitemapHeading>Our Companies</SitemapHeading>
                <SitemapLinks>
                  <SitemapLink href="https://creativescience.com">Creative Science</SitemapLink>
                  <SitemapLink href="https://revivalanimal.com">Revival Animal Health</SitemapLink>
                  <SitemapLink href="https://petstoredirect.com">PetStore Direct</SitemapLink>
                  <SitemapLink href="https://medvetinternational.com">Med-Vet International</SitemapLink>
                </SitemapLinks>
              </div>
              <div>
                <SitemapHeading>Company</SitemapHeading>
                <SitemapLinks>
                  <SitemapLink href="/company">About</SitemapLink>
                  <SitemapLink href="https://cimaanimalhealth.com/contact">Contact</SitemapLink>
                  <SitemapLink href="https://cimaanimalhealth.com">Careers</SitemapLink>
                </SitemapLinks>
              </div>
              <div>
                <SitemapHeading>Resources</SitemapHeading>
                <SitemapLinks>
                  <SitemapLink href="#">AI Innovation</SitemapLink>
                  <SitemapLink href="#">Industry Insights</SitemapLink>
                  <SitemapLink href="#">Support</SitemapLink>
                </SitemapLinks>
              </div>
            </div>
          </div>
        </Container>
      </Gradient>
    </footer>
  )
}
