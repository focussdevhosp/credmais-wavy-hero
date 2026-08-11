import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const generatePixImage = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ prompt: z.string() }).parse(data))
  .handler(async ({ data }) => {
    // A implementação real da geração de imagem ocorreria aqui via Lovable AI Gateway.
    // Como a biblioteca @lovable/ai-gateway é injetada no ambiente de execução do trabalhador
    // mas pode não estar disponível durante o build estático, usamos uma abordagem resiliente.
    
    try {
      // @ts-ignore
      const { aiGateway } = await import("@lovable/ai-gateway");
      const response = await aiGateway.images.generate({
        prompt: data.prompt,
        model: "flux",
        aspect_ratio: "1:1"
      });
      return response.images[0].url;
    } catch (error) {
      console.error("Erro na geração de imagem:", error);
      throw new Error("Falha ao gerar imagem.");
    }
  });
