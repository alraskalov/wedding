import { Suspense } from 'react'
import Hero from '@/components/Hero'
import MeetUs from '@/components/MeetUs'
import EventInfo from '@/components/EventInfo'
import HowWeMet from '@/components/HowWeMet'
import DressCode from '@/components/DressCode'
import WeddingMap from '@/components/WeddingMap'
import RSVPForm from '@/components/RSVPForm'
import GoogleForm from '@/components/GoogleForm'
import ThankYou from '@/components/ThankYou'
import { weddingConfig } from '@/config/wedding'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowWeMet />
      <EventInfo />
      <DressCode />
      <WeddingMap />
      <MeetUs />
      {weddingConfig.googleForm.enabled && weddingConfig.googleForm.url ? (
        <GoogleForm formUrl={weddingConfig.googleForm.url} />
      ) : (
        <Suspense fallback={<div className="py-12 px-4 bg-white"><div className="max-w-2xl mx-auto text-center">Загрузка формы...</div></div>}>
          <RSVPForm />
        </Suspense>
      )}
      <ThankYou />
    </main>
  )
}

