import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const generatePixImage = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ prompt: z.string() }).parse(data))
  .handler(async ({ data }) => {
    const { aiGateway } = await import("@lovable/ai-gateway");
    
    const response = await aiGateway.images.generate({
      prompt: data.prompt,
      model: "flux",
      aspect_ratio: "1:1"
    });

    return response.images[0].url;
  });
