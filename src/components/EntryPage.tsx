import Link from 'next/link'

const EntryPage = () => {
    return (
        <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-5 pb-10 md:max-w-2xl md:items-center md:text-center">
            <h1 className="font-serif text-6xl leading-[1.02] md:text-8xl">
                Stop arguing about what to watch.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">
                Tap once, send the link, start swiping. No account, no code to read out.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 md:max-w-sm">
                <Link
                    href="/room"
                    className="rounded-full bg-secondary py-4 text-center text-lg font-semibold transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary-text"
                >
                    Start a room
                </Link>
                <Link
                    href="/feed"
                    className="rounded-full border border-line py-4 text-center text-lg font-semibold transition hover:border-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary-text"
                >
                    Browse the feed
                </Link>
            </div>
        </main>
    )
}

export default EntryPage