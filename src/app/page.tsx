import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionBranch from '@/components/SectionBranch'
import SectionCompany from '@/components/SectionCompany'
import SectionNews from '@/components/SectionNews'
import SectionRecruit from '@/components/SectionRecruit'
import SectionWhoWeAre from '@/components/SectionWhoWeAre'
import TopMv from '@/components/TopMv'

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="space-y-24 pb-24">
          <TopMv />
          <SectionWhoWeAre />
          <SectionBranch />
          <SectionCompany />
          <SectionRecruit />
          <SectionNews />
        </div>
      </main>
      <Footer />
    </>
  )
}
