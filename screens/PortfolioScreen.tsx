import React, { useState } from 'react';

export const PortfolioScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'manual' | 'automated' | 'stack'>('manual');

  return (
    <div className="min-h-screen bg-gray-50 font-display pb-24">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-30">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="size-10"></div>
          <div className="text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-[#2F4F2F] mb-1">Demonstrações</p>
            <h1 className="text-xl font-bold text-gray-900">Testes Práticos</h1>
          </div>
          <div className="size-10"></div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="px-6 py-4">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('manual')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'manual'
                  ? 'bg-[#2F4F2F] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Testes Manuais
            </button>
            <button
              onClick={() => setActiveTab('automated')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'automated'
                  ? 'bg-[#2F4F2F] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Automação
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'stack'
                  ? 'bg-[#2F4F2F] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Stack de Testes
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {activeTab === 'manual' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Testes Manuais</h2>
              <p className="text-gray-600">Metodologia estruturada para garantia da qualidade</p>
            </div>

            {/* Test Case Example */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Caso de Teste: Login</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  Aprovado
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Pré-condições:</span>
                  <p className="text-gray-600 text-sm mt-1">Usuário registrado no sistema</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Passos:</span>
                  <ol className="text-gray-600 text-sm mt-1 list-decimal list-inside space-y-1">
                    <li>Acessar página de login</li>
                    <li>Inserir e-mail válido</li>
                    <li>Inserir senha correta</li>
                    <li>Clicar em "Entrar"</li>
                  </ol>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Resultado esperado:</span>
                  <p className="text-gray-600 text-sm mt-1">Redirecionamento para dashboard</p>
                </div>
              </div>
            </div>

            {/* Checklist Example */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Checklist: Formulário de Cadastro</h3>
              <div className="space-y-3">
                {[
                  { item: 'Campos obrigatórios marcados', status: 'pass' },
                  { item: 'Validação de e-mail', status: 'pass' },
                  { item: 'Confirmação de senha', status: 'pass' },
                  { item: 'Mensagens de erro claras', status: 'pass' },
                  { item: 'Responsividade mobile', status: 'pass' }
                ].map((check, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      check.status === 'pass' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <span className={`material-symbols-outlined text-sm ${
                        check.status === 'pass' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {check.status === 'pass' ? 'check' : 'close'}
                      </span>
                    </div>
                    <span className="text-gray-700">{check.item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bug Report Example */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Relatório de Bug</h3>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                  Crítico
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Título:</span>
                  <p className="text-gray-600 text-sm mt-1">Botão de salvar não funciona no Firefox</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Passos para reproduzir:</span>
                  <ol className="text-gray-600 text-sm mt-1 list-decimal list-inside space-y-1">
                    <li>Abrir formulário em Firefox</li>
                    <li>Preencher todos os campos</li>
                    <li>Clicar em "Salvar"</li>
                  </ol>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Resultado atual:</span>
                  <p className="text-gray-600 text-sm mt-1">Nada acontece - sem feedback</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Ambiente:</span>
                  <p className="text-gray-600 text-sm mt-1">Firefox 115.0, Windows 11</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'automated' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Testes Automatizados</h2>
              <p className="text-gray-600">Frameworks e ferramentas para eficiência e cobertura</p>
            </div>

            {/* Cypress Example */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">Cy</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Cypress - Testes E2E</h3>
                  <p className="text-gray-600 text-sm">Framework moderno para testes end-to-end</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded p-4 font-mono text-sm text-gray-800 mb-4">
                <pre>{`describe('Página de Login', () => {
  it('deve fazer login com credenciais válidas', () => {
    cy.visit('/login')
    cy.get('[data-cy=email]').type('user@example.com')
    cy.get('[data-cy=password]').type('password123')
    cy.get('[data-cy=submit]').click()
    cy.url().should('include', '/dashboard')
  })
})`}</pre>
              </div>
              <p className="text-gray-600 text-sm">
                Objetivo: Garantir que o fluxo completo de autenticação funciona corretamente,
                validando tanto o frontend quanto a integração com o backend.
              </p>
            </div>

            {/* Selenium Example */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">Se</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Selenium - WebDriver</h3>
                  <p className="text-gray-600 text-sm">Automação cross-browser para aplicações web</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded p-4 font-mono text-sm text-gray-800 mb-4">
                <pre>{`public class LoginTest {
    @Test
    public void testValidLogin() {
        WebDriver driver = new ChromeDriver();
        driver.get("https://app.com/login");

        WebElement email = driver.findElement(By.id("email"));
        email.sendKeys("user@example.com");

        WebElement password = driver.findElement(By.id("password"));
        password.sendKeys("password123");

        WebElement submit = driver.findElement(By.id("submit"));
        submit.click();

        Assert.assertTrue(driver.getCurrentUrl().contains("/dashboard"));
        driver.quit();
    }
}`}</pre>
              </div>
              <p className="text-gray-600 text-sm">
                Utilizado para testes de regressão em múltiplos navegadores,
                garantindo compatibilidade cross-browser.
              </p>
            </div>

            {/* API Testing Example */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">Po</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Postman/Newman - APIs</h3>
                  <p className="text-gray-600 text-sm">Testes automatizados de APIs REST</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded p-4 text-sm text-gray-800 mb-4">
                <div className="space-y-2">
                  <div><strong>Endpoint:</strong> POST /api/users</div>
                  <div><strong>Request:</strong></div>
                  <pre className="bg-white p-2 rounded text-xs">{`{
  "name": "João Silva",
  "email": "joao@example.com"
}`}</pre>
                  <div><strong>Assertions:</strong></div>
                  <ul className="list-disc list-inside text-xs space-y-1">
                    <li>Status code = 201</li>
                    <li>Response contains user ID</li>
                    <li>Email format validation</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Testes de contrato de API, validação de responses e testes de performance.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Stack de Testes</h2>
              <p className="text-gray-600">Tecnologias e ferramentas especializadas</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Testing Frameworks */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Frameworks de Teste</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Cypress', desc: 'Testes E2E modernos' },
                    { name: 'Selenium WebDriver', desc: 'Automação cross-browser' },
                    { name: 'JUnit/TestNG', desc: 'Testes unitários Java' },
                    { name: 'Jest', desc: 'Testes JavaScript/React' },
                    { name: 'Postman/Newman', desc: 'Testes de API' }
                  ].map((tool, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#869878] rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {tool.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{tool.name}</div>
                        <div className="text-gray-500 text-xs">{tool.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testing Tools */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ferramentas de QA</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Jira', desc: 'Gerenciamento de bugs' },
                    { name: 'TestRail', desc: 'Planejamento de testes' },
                    { name: 'BrowserStack', desc: 'Testes cross-browser' },
                    { name: 'Charles Proxy', desc: 'Análise de tráfego' },
                    { name: 'Figma', desc: 'Revisão de designs' }
                  ].map((tool, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                        <span className="text-green-600 text-xs font-bold">
                          {tool.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{tool.name}</div>
                        <div className="text-gray-500 text-xs">{tool.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CI/CD */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">CI/CD & DevOps</h3>
                <div className="space-y-3">
                  {[
                    { name: 'GitHub Actions', desc: 'Pipelines automatizados' },
                    { name: 'Jenkins', desc: 'Servidor de automação' },
                    { name: 'Docker', desc: 'Containerização' },
                    { name: 'AWS CodePipeline', desc: 'Deploy na nuvem' },
                    { name: 'SonarQube', desc: 'Análise de código' }
                  ].map((tool, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                        <span className="text-purple-600 text-xs font-bold">
                          {tool.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{tool.name}</div>
                        <div className="text-gray-500 text-xs">{tool.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monitoring */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monitoramento</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Sentry', desc: 'Rastreamento de erros' },
                    { name: 'DataDog', desc: 'Monitoramento de performance' },
                    { name: 'New Relic', desc: 'APM e observabilidade' },
                    { name: 'Google Analytics', desc: 'Análise de uso' },
                    { name: 'Hotjar', desc: 'Heatmaps e sessões' }
                  ].map((tool, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                        <span className="text-orange-600 text-xs font-bold">
                          {tool.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{tool.name}</div>
                        <div className="text-gray-500 text-xs">{tool.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};