import Link from "next/link";

export default function ResetPasswordPage() {
    return (
        <div className="flex flex-col justify-center items-center py-10 px-5 sm:py-[100px] sm:px-[100px]">
            <p className="text-2xl sm:text-3xl font-semibold">RESET PASSWORD</p>
            <p className="text-sm sm:text-base mt-2 text-center">We will send you an email to reset your password</p>

            <div className="flex items-center border-2 w-full sm:w-[50vw] mt-5 p-2 sm:p-3 gap-2 sm:gap-5 rounded-lg">
                <input
                    placeholder="Email"
                    className="w-full outline-none text-sm sm:text-base"
                />
            </div>

            <div className="flex w-full sm:w-[50vw] mt-5 gap-3">
                <div className="bg-color1 text-white px-4 py-2 sm:px-6 sm:py-3">
                    <button className="w-full">RESTORE</button>
                </div>
                <div className="text-color1 text-sm sm:text-base py-2 sm:py-3 rounded-lg">
                    <Link href="/">
                        <p className="inline-flex items-center font-semibold text-sm sm:text-base border-b border-current">
                            Cancel
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
