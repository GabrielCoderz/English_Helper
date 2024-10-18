import { TranscriptResponse, YoutubeTranscript } from 'youtube-transcript';

interface Transcript {
    url: string
}

class TranscriptService {
    async execute({ url }: Transcript): Promise<TranscriptResponse[]> {
        const video = await YoutubeTranscript.fetchTranscript(url)

        console.log(url)

        console.log(video)

        return video
    }
}

export { TranscriptService }