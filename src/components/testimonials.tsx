
import { Container } from '@/components/container'
import { Heading, Lead } from '@/components/text'

const testimonials = [
  {
    img: '/testimonials/tanya-douglas.jpg',
    name: 'Dr. Sarah Mitchell',
    title: 'Veterinary Practice Owner',
    quote:
      'CIMA\'s AI-powered diagnostic tools have transformed how we practice veterinary medicine. The accuracy and speed are remarkable.',
  },
  {
    img: '/testimonials/michael-foster.jpg',
    name: 'Michael Chen',
    title: 'Pet Retail Manager',
    quote:
      'Revival Animal Health\'s inventory management system powered by CIMA\'s AI has eliminated stockouts and improved our margins significantly.',
  },
  {
    img: '/testimonials/emily-taylor.jpg',
    name: 'Emily Rodriguez',
    title: 'Professional Groomer',
    quote: 'PetStore Direct\'s AI-driven supply recommendations have been a game-changer for my grooming business.',
  },
]

export function Testimonials() {
  return (
    <div className="relative pb-24 pt-16 sm:pb-32 sm:pt-24">
      <div className="absolute inset-x-0 top-0 h-96 text-gray-500/10 [mask-image:linear-gradient(to_bottom,white,transparent)] sm:h-[54rem]">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <pattern
              id="testimonials-pattern"
              width="128"
              height="128"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
            >
              <path d="M0 128V.5H128" fill="none" stroke="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonials-pattern)" />
        </svg>
      </div>
      <Container className="relative">
        <figure>
          <blockquote>
            <Heading as="h2" className="max-w-3xl">
              <span className="bg-linear-to-r from-[#00d084] from-28% via-[#00163C] via-70% to-[#1D3D7C] bg-clip-text text-transparent">
                Join the best professionals in the business and start using CIMA Animal Health
              </span>{' '}
              to deliver exceptional care with AI-powered innovation.
            </Heading>
          </blockquote>
          <figcaption className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIndex) => (
              <div
                key={testimonialIndex}
                className="rounded-4xl p-10 shadow-md shadow-gray-900/5 ring-1 ring-gray-900/5"
              >
                <blockquote>
                  <p className="relative text-sm/6 tracking-tight text-gray-950 before:absolute before:-translate-x-full before:content-['"'] after:absolute after:content-['"']">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="text-sm/5">
                    <div className="font-semibold text-gray-950">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </figcaption>
              </div>
            ))}
          </figcaption>
        </figure>
      </Container>
    </div>
  )
}
