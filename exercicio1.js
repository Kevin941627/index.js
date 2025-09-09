// ===== IMPORTANDO MÓDULOS =====
// Linha 1: Importar o módulo 'os' (Operating System)
// Este módulo nos dá acesso a informações do sistema operacional
const os = require('os');

// Linha 2: Importar o módulo 'process'
// Este módulo nos dá informações sobre o processo Node.js atual
const process = require('process');

// ===== COLETANDO INFORMAÇÕES =====

// Linha 3: Descobrir qual sistema operacional está rodando
// os.platform() retorna: 'win32' (Windows), 'darwin' (Mac), 'linux' (Linux)
const sistemaOperacional1 = os.platform();

// Linha 4: Converter o nome técnico para algo mais amigável
let nomeSistema;
if (sistemaOperacional1 === 'win32') {
  nomeSistema = 'Windows';
} else if (sistemaOperacional1 === 'darwin') {
  nomeSistema = 'macOS';
} else if (sistemaOperacional1 === 'linux') {
  nomeSistema = 'Linux';
} else {
  nomeSistema = 'Sistema Desconhecido';
}

// Linha 5: Descobrir quanta memória RAM o computador tem
// os.totalmem() retorna em bytes, então dividimos por 1024* para ter ter GB
const memoriaBytes = os.totalmem();
const memoriaGB = (memoriaBytes / (1024 * 1024 * 1024)).toFixed(2);

// Linha 6: Descobrir quantos processadores (CPUs) existem
// os.cpus() retorna um array, então usamos .length para contar
const numeroCPUs = os.cpus().length;

// Linha 7: Calcular há quanto tempo o computador está ligado
// os.uptime() retorna em segundos, vamos converter para horas e minutos
const tempoLigadoSegundos = os.uptime();
const horas = Math.floor(tempoLigadoSegundos / 3600);
const minutos = Math.floor((tempoLigadoSegundos % 3600) / 60);

// Linha 8: Descobrir o nome do usuário logado
// os.userInfo().username nos dá o nome do usuário atual
const nomeUsuario = os.userInfo().username;

// ===== EXIBINDO OS RESULTADOS =====

// Linha 9: Mostrar um cabeçalho bonito
console.log('🖥️ === INFORMAÇÕES DO SISTEMA ===\n');

// Linha 10-14: Mostrar cada informação coletada
console.log('💻 Sistema Operacional:', nomeSistema);
console.log('🧠 Memória RAM Total:', memoriaGB, 'GB');
console.log('🌟 Processadores (CPUs):', numeroCPUs);
console.log('⏰ Tempo Ligado:', horas, 'horas,', minutos, 'minutos');
console.log('👤 Usuário:', nomeUsuario);

// Linha 15: Mensagem final
console.log('\n✅ Análise concluída com sucesso!');

//importar o módulo 'os' (Operating System)
//Este módulo nos dá acesso a informações do sistema operacional
const os = require('os');

// Exibir um título bonito
console.log('=== 🖥️ INFORMAÇÕES DO SISTEMA ===');
console.log(''); // Linha em branco para organizar

// Mostrar a plataforma (Windows = win32, Mac = darwin, Linux = linux)
console.log('📦 Plataforma:', process.platform);

// Mostrar se é 32 ou 64 bits
console.log('🔧 Arquitetura:', process.arch);

// Mostrar qual versão do Node.js está instalada
console.log('🧪 Versão do Node.js:', process.version);

// Mostrar em qual pasta estamos executando o script
console.log('📁 Diretório atual:', process.cwd());

// Mostrar qual usuário está logado
console.log('👤 Usuário:', os.userInfo().username);

// Calcular e mostrar a memória RAM total em GB
// os.totalmem() retorna bytes, então dividimos por 1024 três vezes para chegar em GB
const memoria = Math.round(os.totalmem() / 1024 / 1024 / 1024);
console.log('💾 Memória total:', memoria + ' GB');

console.log(''); // Linha em branco
console.log('✅ Análise do sistema concluída!');
