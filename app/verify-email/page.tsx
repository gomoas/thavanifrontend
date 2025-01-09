'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import axios from 'axios';

interface User {
    full_name: string;
    email: string;
    phone_number: string;
    is_verified: boolean;
    password: string;
}

interface VerificationState {
    status: 'verifying' | 'success' | 'error';
    message: string;
    user?: Omit<User, 'password'>;
}

export default function VerifyEmail() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [verificationState, setVerificationState] = useState<VerificationState>({
        status: 'verifying',
        message: 'Verifying your email...'
    });

    useEffect(() => {
        const verifyEmail = async () => {
            const token = searchParams.get('token');

            if (!token) {
                setVerificationState({
                    status: 'error',
                    message: 'Token is required.'
                });
                return;
            }

            try {
                const response = await axios.get(`http://localhost:5000/api/v1/auth/verify-email`, {
                    params: { token },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const data = response.data;

                if (response.status === 200) {
                    setVerificationState({
                        status: 'success',
                        message: data.message,
                        user: data.user
                    });
                    // Save user data if needed
                    setTimeout(() => {
                        router.push('/login');
                    }, 3000);
                } else {
                    setVerificationState({
                        status: 'error',
                        message: data.message || 'Verification failed.'
                    });
                }
            } catch (error) {
                setVerificationState({
                    status: 'error',
                    message: 'Error during verification. Please try again.'
                });
            }
        };

        verifyEmail();
    }, [searchParams, router]);

    const handleLoginClick = () => {
        router.push('/login');
    };

    const handleSignupClick = () => {
        router.push('/signup');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <h1 className="text-2xl font-bold text-center">Email Verification</h1>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center space-y-4">
                        {verificationState.status === 'verifying' && (
                            <div className="flex flex-col items-center space-y-2">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
                                <p className="text-gray-600"></p>
                            </div>
                        )}

                        <div className={`text-center ${verificationState.status === 'success' ? 'text-green-600' :
                            verificationState.status === 'error' ? 'text-red-600' :
                                'text-gray-600'
                            }`}>
                            <p className="font-medium">{verificationState.message}</p>
                        </div>

                        {verificationState.status === 'success' && verificationState.user && (
                            <div className="text-center space-y-2">
                                <p className="text-green-600">Your account has been successfully verified!</p>
                                <div className="text-gray-600">
                                    <p>Name: {verificationState.user.full_name}</p>
                                    <p>Email: {verificationState.user.email}</p>
                                </div>
                                <p className="text-sm text-gray-500">Redirecting to login page...</p>
                            </div>
                        )}

                        {verificationState.status === 'error' && (
                            <div className="w-full space-y-3">
                                {verificationState.message.includes('already verified') ? (
                                    <Button
                                        onClick={handleLoginClick}
                                        className="w-full"
                                    >
                                        Go to Login
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            onClick={handleSignupClick}
                                            className="w-full"
                                        >
                                            Try Signing Up Again
                                        </Button>
                                        <Button
                                            onClick={handleLoginClick}
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Go to Login
                                        </Button>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
