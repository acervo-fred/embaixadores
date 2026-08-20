// Os 92 municípios do Rio de Janeiro, cada um já com a mesorregião e a
// microrregião a que pertence (divisão IBGE 1989–2017 — extinta, mas ainda
// a mais usada no dia a dia; placeholder até a aba "Mapa do RJ" da
// Plataforma Campanha definir a divisão final do projeto). Conferido via
// Wikipédia em 2026-08-20.
//
// O embaixador só escolhe o Município — mesorregião e microrregião são
// derivadas automaticamente daqui, sem o embaixador precisar saber essa
// divisão.
export const MUNICIPIOS_RJ = [
  { municipio: "Angra dos Reis", microrregiao: "Baía da Ilha Grande", mesorregiao: "Sul Fluminense" },
  { municipio: "Aperibé", microrregiao: "Santo Antônio de Pádua", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Araruama", microrregiao: "Lagos", mesorregiao: "Baixadas Litorâneas" },
  { municipio: "Areal", microrregiao: "Três Rios", mesorregiao: "Centro Fluminense" },
  { municipio: "Armação dos Búzios", microrregiao: "Lagos", mesorregiao: "Baixadas Litorâneas" },
  { municipio: "Arraial do Cabo", microrregiao: "Lagos", mesorregiao: "Baixadas Litorâneas" },
  { municipio: "Barra do Piraí", microrregiao: "Barra do Piraí", mesorregiao: "Sul Fluminense" },
  { municipio: "Barra Mansa", microrregiao: "Vale do Paraíba Fluminense", mesorregiao: "Sul Fluminense" },
  { municipio: "Belford Roxo", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Bom Jardim", microrregiao: "Nova Friburgo", mesorregiao: "Centro Fluminense" },
  { municipio: "Bom Jesus do Itabapoana", microrregiao: "Itaperuna", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Cabo Frio", microrregiao: "Lagos", mesorregiao: "Baixadas Litorâneas" },
  { municipio: "Cachoeiras de Macacu", microrregiao: "Macacu-Caceribu", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Cambuci", microrregiao: "Santo Antônio de Pádua", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Campos dos Goytacazes", microrregiao: "Campos dos Goytacazes", mesorregiao: "Norte Fluminense" },
  { municipio: "Cantagalo", microrregiao: "Cantagalo-Cordeiro", mesorregiao: "Centro Fluminense" },
  { municipio: "Carapebus", microrregiao: "Macaé", mesorregiao: "Norte Fluminense" },
  { municipio: "Cardoso Moreira", microrregiao: "Campos dos Goytacazes", mesorregiao: "Norte Fluminense" },
  { municipio: "Carmo", microrregiao: "Cantagalo-Cordeiro", mesorregiao: "Centro Fluminense" },
  { municipio: "Casimiro de Abreu", microrregiao: "Bacia de São João", mesorregiao: "Baixadas Litorâneas" },
  { municipio: "Comendador Levy Gasparian", microrregiao: "Três Rios", mesorregiao: "Centro Fluminense" },
  { municipio: "Conceição de Macabu", microrregiao: "Macaé", mesorregiao: "Norte Fluminense" },
  { municipio: "Cordeiro", microrregiao: "Cantagalo-Cordeiro", mesorregiao: "Centro Fluminense" },
  { municipio: "Duas Barras", microrregiao: "Nova Friburgo", mesorregiao: "Centro Fluminense" },
  { municipio: "Duque de Caxias", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Engenheiro Paulo de Frontin", microrregiao: "Vassouras", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Guapimirim", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Iguaba Grande", microrregiao: "Lagos", mesorregiao: "Baixadas Litorâneas" },
  { municipio: "Itaboraí", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Itaguaí", microrregiao: "Itaguaí", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Italva", microrregiao: "Itaperuna", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Itaocara", microrregiao: "Santo Antônio de Pádua", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Itaperuna", microrregiao: "Itaperuna", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Itatiaia", microrregiao: "Vale do Paraíba Fluminense", mesorregiao: "Sul Fluminense" },
  { municipio: "Japeri", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Laje do Muriaé", microrregiao: "Itaperuna", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Macaé", microrregiao: "Macaé", mesorregiao: "Norte Fluminense" },
  { municipio: "Macuco", microrregiao: "Cantagalo-Cordeiro", mesorregiao: "Centro Fluminense" },
  { municipio: "Magé", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Mangaratiba", microrregiao: "Itaguaí", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Maricá", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Mendes", microrregiao: "Vassouras", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Mesquita", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Miguel Pereira", microrregiao: "Vassouras", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Miracema", microrregiao: "Santo Antônio de Pádua", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Natividade", microrregiao: "Itaperuna", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Nilópolis", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Niterói", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Nova Friburgo", microrregiao: "Nova Friburgo", mesorregiao: "Centro Fluminense" },
  { municipio: "Nova Iguaçu", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Paracambi", microrregiao: "Vassouras", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Paraíba do Sul", microrregiao: "Três Rios", mesorregiao: "Centro Fluminense" },
  { municipio: "Paraty", microrregiao: "Baía da Ilha Grande", mesorregiao: "Sul Fluminense" },
  { municipio: "Paty do Alferes", microrregiao: "Vassouras", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Petrópolis", microrregiao: "Serrana", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Pinheiral", microrregiao: "Vale do Paraíba Fluminense", mesorregiao: "Sul Fluminense" },
  { municipio: "Piraí", microrregiao: "Vale do Paraíba Fluminense", mesorregiao: "Sul Fluminense" },
  { municipio: "Porciúncula", microrregiao: "Itaperuna", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Porto Real", microrregiao: "Vale do Paraíba Fluminense", mesorregiao: "Sul Fluminense" },
  { municipio: "Quatis", microrregiao: "Vale do Paraíba Fluminense", mesorregiao: "Sul Fluminense" },
  { municipio: "Queimados", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Quissamã", microrregiao: "Macaé", mesorregiao: "Norte Fluminense" },
  { municipio: "Resende", microrregiao: "Vale do Paraíba Fluminense", mesorregiao: "Sul Fluminense" },
  { municipio: "Rio Bonito", microrregiao: "Macacu-Caceribu", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Rio Claro", microrregiao: "Vale do Paraíba Fluminense", mesorregiao: "Sul Fluminense" },
  { municipio: "Rio das Flores", microrregiao: "Barra do Piraí", mesorregiao: "Sul Fluminense" },
  { municipio: "Rio das Ostras", microrregiao: "Bacia de São João", mesorregiao: "Baixadas Litorâneas" },
  { municipio: "Rio de Janeiro", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Santa Maria Madalena", microrregiao: "Santa Maria Madalena", mesorregiao: "Centro Fluminense" },
  { municipio: "Santo Antônio de Pádua", microrregiao: "Santo Antônio de Pádua", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Sapucaia", microrregiao: "Três Rios", mesorregiao: "Centro Fluminense" },
  { municipio: "Saquarema", microrregiao: "Lagos", mesorregiao: "Baixadas Litorâneas" },
  { municipio: "São Fidélis", microrregiao: "Campos dos Goytacazes", mesorregiao: "Norte Fluminense" },
  { municipio: "São Francisco de Itabapoana", microrregiao: "Campos dos Goytacazes", mesorregiao: "Norte Fluminense" },
  { municipio: "São Gonçalo", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "São João da Barra", microrregiao: "Campos dos Goytacazes", mesorregiao: "Norte Fluminense" },
  { municipio: "São João de Meriti", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "São José de Ubá", microrregiao: "Santo Antônio de Pádua", mesorregiao: "Noroeste Fluminense" },
  { municipio: "São José do Vale do Rio Preto", microrregiao: "Serrana", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "São Pedro da Aldeia", microrregiao: "Lagos", mesorregiao: "Baixadas Litorâneas" },
  { municipio: "São Sebastião do Alto", microrregiao: "Santa Maria Madalena", mesorregiao: "Centro Fluminense" },
  { municipio: "Seropédica", microrregiao: "Itaguaí", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Silva Jardim", microrregiao: "Bacia de São João", mesorregiao: "Baixadas Litorâneas" },
  { municipio: "Sumidouro", microrregiao: "Nova Friburgo", mesorregiao: "Centro Fluminense" },
  { municipio: "Tanguá", microrregiao: "Rio de Janeiro", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Teresópolis", microrregiao: "Serrana", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Trajano de Moraes", microrregiao: "Santa Maria Madalena", mesorregiao: "Centro Fluminense" },
  { municipio: "Três Rios", microrregiao: "Três Rios", mesorregiao: "Centro Fluminense" },
  { municipio: "Valença", microrregiao: "Barra do Piraí", mesorregiao: "Sul Fluminense" },
  { municipio: "Varre-Sai", microrregiao: "Itaperuna", mesorregiao: "Noroeste Fluminense" },
  { municipio: "Vassouras", microrregiao: "Vassouras", mesorregiao: "Metropolitana do Rio de Janeiro" },
  { municipio: "Volta Redonda", microrregiao: "Vale do Paraíba Fluminense", mesorregiao: "Sul Fluminense" },
];

// Acesso rápido pelo nome do município (comparação sem acento/maiúsculas).
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

const INDICE_MUNICIPIOS = new Map(MUNICIPIOS_RJ.map((m) => [normalizar(m.municipio), m]));

export function buscarMunicipio(nomeDigitado) {
  return INDICE_MUNICIPIOS.get(normalizar(nomeDigitado || "")) || null;
}
