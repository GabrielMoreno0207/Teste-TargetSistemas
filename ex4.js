// Faturamento por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // Calculando o faturamento total
  const faturamentoTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
  
  // Calculando o percentual de cada estado
  const percentuais = {};
  for (const estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / faturamentoTotal) * 100;
  }
  
  // Exibindo os resultados
  for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
  }
  