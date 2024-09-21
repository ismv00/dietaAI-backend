import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    let responseText =
      '```json\n{\n  "nome": "Igor",\n  "sexo": "Masculino",\n  "idade": 37,\n  "altura": 1.85,\n  "peso": 95,\n  "objetivo": "Hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Cafe da Manha",\n      "alimentos": [\n        "2 fatias de pão integral",\n        "2 ovos mexidos",\n        "1 banana",\n        "1 copo de leite desnatado"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da Manha",\n        "alimentos": [\n        "1 scoop de whey protein",\n        "1 banana"\n      ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoco",\n      "alimentos": [\n        "150g de frango grelhado",\n        "100g de arroz integral",\n        "100g de batata doce",\n        "Salada verde a vontade"\n      ]\n    },\n    {\n      "horario": "16:00",\n      "nome": "Lanche da Tarde",\n      "alimentos": [\n        "1 scoop de whey protein",\n        "1 Maça"\n      ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de carne vermelha magra",\n        "100g de batata doce",\n        "100g de brócolis"\n      ]\n    },\n    {\n      "horario": "21:00",\n      "nome": "Lanche antes de dormir",\n        "alimentos": [\n        "1 scoop de caseína"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Whey protein",\n    "Creatina",\n    "BCAA",\n    "Glutamina"\n  ]\n}\n```';

    try {
      //Formatar o texto
      let jsonString = responseText
        .replace(/```\w*\n/g, "")
        .replace(/\n```/g, "")
        .trim();
      let jsonObject = JSON.parse(jsonString);
      return reply.send({ data: jsonObject });
    } catch (err) {
      console.error(err);
    }

    reply.send({ ok: true });
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply);
    }
  );
}
