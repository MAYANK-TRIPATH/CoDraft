import AddDocumentBtn from '@/components/AddDocumentBtn'
import Header from '@/components/Header'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = async () => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');

  const documents = []
  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4 text-white">
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

    {documents.length > 0 ? (
      <div>

      </div>
    ): (
      <div className="document-list-empty">
        <Image
        src="/assests/icons/doc.svg"
        alt="Document"
        width={40}
        height={40}
        className="mx-auto text-white"
        />
      </div>
    )}
  <AddDocumentBtn userId={clerkUser.id}
  email={clerkUser.emailAddresses[0].emailAddress}
  />
    </main>
  )
}

export default Home