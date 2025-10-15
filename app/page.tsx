import ShoPSHeader from '@/components/sho-ps/ShoPSHeader'
import ShoPSHome from '@/components/sho-ps/ShoPSHome'
import ShoPSFooter from '@/components/sho-ps/ShoPSFooter'

export default function Page() {
  return (
    <>
      <ShoPSHeader />
      <main className="l-main -top">
        <ShoPSHome />
      </main>
      <ShoPSFooter />
    </>
  )
}
