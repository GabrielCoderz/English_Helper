import { Request, Response } from "express"
import { TranscriptService } from "../../service/transcript/TranscriptService"

class TranscriptController {
    async handle(request: Request, response: Response) {
        const { url } = request.body

        console.log(url)

        const transcriptService = new TranscriptService()

        const video = await transcriptService.execute({
            url
        })

        response.json({
            url: video
        })
    }
}

export { TranscriptController }