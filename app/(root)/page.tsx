import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Sharpen your interview skills through realistic AI-powered technical mock sessions</h2>
                    <p className="text-lg">
                        Practice real interview questions, get instant feedback, and walk into your interviews with confidence — not nerves
                    </p>

                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/in terview">Start an Interview</Link>
                    </Button>
                </div>
                <Image src="/robotv2.png" alt="robot" width={320} height={320} className="max-sm:hidden" />

            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id}/>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}
                    {/*<p>You haven&#39;t taken any interviews yet</p>*/}
                </div>

            </section>
        </>
    )
}
export default Page
