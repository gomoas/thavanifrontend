// app/profile/page.tsx
"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function ProfilePage() {
    const { data: session } = useSession()
    const router = useRouter()

    const handleSignOut = async () => {
        await signOut({ redirect: true, callbackUrl: "/login" })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <div className="flex flex-col items-center space-y-4">
                    {session?.user?.image && (
                        <Image
                            src={session.user.image}
                            alt="Profile"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                    )}

                    <h1 className="text-2xl font-bold">Profile</h1>

                    <div className="w-full space-y-2">
                        <div className="border-b pb-2">
                            <p className="text-gray-500">Name</p>
                            <p className="font-medium">{session?.user?.name}</p>
                        </div>

                        <div className="border-b pb-2">
                            <p className="text-gray-500">Email</p>
                            <p className="font-medium">{session?.user?.email}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSignOut}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors w-full"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    )
}