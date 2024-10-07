"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function OverMij() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">

<div className="flex flex-col lg:flex-row w-full max-w-7xl space-y-8 lg:space-y-0 lg:space-x-8 items-start">


        <Card className="w-full lg:w-1/2 z-10 bg-white/80 backdrop-blur-md shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl font-bold text-gray-800">Over Mij</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="h-40 w-40 border-4 border-white shadow-lg">
              <AvatarImage src="https://i.imgur.com/YPSMtdM.png" alt="Profielfoto" />
              <AvatarFallback>DH</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-gray-800">Daan Hansen</h2>
              <p className="text-xl text-gray-600">Student Vliegtuigtechniek</p>
            </div>
          </div>
          
          <Separator className="bg-gray-300" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Section title="Eigenschappen">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Leergierig</li>
                  <li>Oplossingsgericht</li>
                  <li>Analytisch</li>
                  <li>Creatief</li>
                </ul>
              </Section>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://cdn.radarbox.com/photo/PH-BVA-1723676453-0.jpg"
                  alt="Eigenschappen"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <Section title="Waar ben je goed in?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Sleutelen</li>
                  <li>Programmeren</li>
                </ul>
              </Section>
            </div>
            <div className="space-y-6">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://analyticsindiamag.com/wp-content/uploads/2020/02/PROGRAMMING-LANGUAGE-1536x1025.jpg"
                  alt="Vaardigheden"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <Section title="Waar weet je veel van af?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Vliegtuigen</li>
                  <li>Web Development</li>
                  <li>Server Hosting</li>
                </ul>
              </Section>
              <Section title="Wat kun je minder goed?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Werken in teamverband</li>
                  <li>Werken in ploegendienst</li>
                  <li>Projecten Afmaken</li>
                </ul>
              </Section>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Section title="Wat kun je nog niet?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Rijbewijs</li>
                  <li>Op tijd naar bed gaan</li>
                </ul>
              </Section>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://media-01.imu.nl/storage/keesdevaan.nl/8916/c1-rijbewijs-kosten-500x500.png"
                  alt="Uitdagingen"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <Section title="Wat zou je willen leren?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Machine Learning</li>
                  <li>Surfen</li>
                </ul>
              </Section>
            </div>
            <div className="space-y-6">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_380809555-scaled.jpg"
                  alt="Leren"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <Section title="Welke taken vind je leuk/minder leuk?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Repetetieve taken</li>
                  <li>Omgaan met klanten</li>
                  <li>Code debuggen</li>
                </ul>
              </Section>
              <Section title="Hoe ga je om met minder leuke taken?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Ik doe ze meestal zo snel mogelijk om er maar klaar mee te zijn.</li>
                  <li>Ik wacht tot op het laatste moment om ze te doen.</li>
                  <li>Veel pauzes nemen.</li>
                </ul>
              </Section>
            </div>
          </div>

          <Separator className="bg-gray-300" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Section title="Waar heb je een hekel aan bij anderen?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Narcissisme</li>
                  <li>Gebrek aan communicatie</li>
                  <li>Onzorgvuldigheid</li>
                </ul>
              </Section>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2021-04/CaliforniaSurfingDay_Stock_RF_116354875.jpg.webp?itok=9AO7QA-t"
                  alt="Waarden"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <Section title="Wat is belangrijk voor je?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Kwaliteit</li>
                  <li>Toegang tot informatie</li>
                  <li>Collega&apos;s</li>
                </ul>
              </Section>
            </div>
            <div className="space-y-6">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://www.alert-software.com/hs-fs/hubfs/causes_of_poor_communications_in_the_workplace.png?width=1192&name=causes_of_poor_communications_in_the_workplace.png"
                  alt="Motivatie"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <Section title="Waar wil je hard voor werken?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Geld</li>
                  <li>Waarde toevoegen doormiddel van oplossingen zoeken.</li>
                </ul>
              </Section>
              <Section title="Wie zijn je rolmodellen en waarom?">
                <p className="text-gray-700">
                  Steve Jobs, omdat hij een goede design filosofie heeft en erg ambitieus was in het brengen van oplossingen in plaats van alleen een product. Volgens hem was de simplistischiteit en functionaliteit voor de gebruiker het belangrijkste, en ontwikkelde hij van uit die kern.
                </p>
              </Section>
              <Section title="Wat wil je dat anderen over je denken?">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Vriendelijk</li>
                  <li>Behulpzaam</li>
                  <li>Grappig</li>
                </ul>
              </Section>
            </div>
          </div>
        </CardContent>
        </Card>

        <Card className="w-full lg:w-1/2 z-10 bg-white/80 backdrop-blur-md shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl font-bold text-gray-800">Mijn Visie op de Toekomst</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
    <div className="space-y-6">
      <Section title="Ontwikkelingen in mijn vakgebied">
        <p className="text-gray-700">
          Front-end development verandert snel, met nieuwe frameworks en tools. Basisconcepten blijven hetzelfde, maar AI-wrappers en moderne UI libraries maken front-end toegankelijker dan ooit.
        </p>
      </Section>

      <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://viso.ai/wp-content/uploads/2022/08/applications-of-computer-vision-in-aviation-visoai.png"
                  alt="Eigenschappen"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>

      <Section title="Trends in de maatschappij">
        <p className="text-gray-700">
          Strakke, minimalistische designs domineren, met Apple als grote invloed. Veel bedrijven, zoals McDonald's, nemen deze stijl over, ook al past dat niet altijd bij hun identiteit.
        </p>
      </Section>

      <Section title="Mijn talenten en hoe ze passen bij trends">
        <p className="text-gray-700">
          Met mijn ervaring in programmeren en UI/UX design kan ik snel inspelen op trends. Mijn ervaring met ondernemerschap helpt me om ideeën om te zetten in concrete producten.
        </p>
      </Section>

      <Section title="Bijblijven in mijn vakgebied">
        <p className="text-gray-700">
          Ik update mijn tech stack regelmatig en volg nieuwe ontwikkelingen via platforms zoals YouTube.
        </p>
      </Section>

      <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5622AQHjPx71aRSSEw/feedshare-shrink_800/feedshare-shrink_800/0/1702446939042?e=2147483647&v=beta&t=Y9RyN-XUEuRDNDw3NftG9VhgddaH23_A6AKK7r7ER90"
                  alt="Eigenschappen"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>

      <Section title="Mijn bijdrage aan projecten">
        <p className="text-gray-700">
          Ik ben sterk in het bedenken van oplossingen voor technische en logistieke uitdagingen, en weet hoe ik deze ideeën effectief kan overbrengen op een team.
        </p>
      </Section>

      <Section title="Inzet van mijn kwaliteiten in de maatschappij">
        <p className="text-gray-700">
          Met mijn kennis van luchtvaarttechniek en IT ben ik in een unieke positie om beide te combineren en bij te dragen aan innovatie in de luchtvaartsector.
        </p>
      </Section>
    </div>
  </CardContent>
        </Card>

        

      </div>

    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-medium text-gray-800">{title}</h3>
      {children}
    </div>
  )
}
