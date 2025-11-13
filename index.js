(async function(codioIDE, window) {

  const systemPrompt = "You are a help assistant"
  codioIDE.coachBot.register("iNeedHelpButton", "I have a question", onButtonPress)
  async function onButtonPress() {
    const context = await codioIDE.coachBot.getContext()
    const input = await codioIDE.coachBot.input("Please paste the error message you want me to explain!")

    const userPrompt = "{% prompt 'ERROR_AUGMENTATION_USER_PROMPT_WITH_FIXES' %}"
    const result = await codioIDE.coachBot.ask({
      systemPrompt: systemPrompt,
      userPrompt: userPrompt,
      vars: {
        "GUIDE_CONTENT": context.guidesPage.content,
        "INPUT": input
      }
    })

  }
})(window.codioIDE, window)
