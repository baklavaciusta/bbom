const { ButtonBuilder } = require('discord.js');

module.exports = {
  interaction: {
    name: "oy-ver",
    description: "Bota TOP.GG üzerinden oy vermeniz için bağlantı verir.",
    options: []
  },
  aliases: ['vote', 'oy', 'oyver', 'oyla', 'oy-verme-linki', 'oyvermelinki'],
  category: "Bot",
  memberPermissions: [],
  botPermissions: ["SendMessages", "EmbedLinks"],
  nsfw: false,
  cooldown: false,
  ownerOnly: false,

  async execute(client, interaction, data) {

    let voteButon = new ButtonBuilder().setLabel('topgg onaylamdıgı icin kapatıldı').setURL("https://discord.gg/wWQd2n23eA").setStyle('Link');

    interaction.reply({
      embeds: [
        {
          color: client.settings.embedColors.default,
          title: '**»**topgg onaylamdıgı icin kapatıldı',
          url: "https://discord.gg/wWQd2n23eA",
          author: {
            name: `${client.user.username} • Oy Ver (Vote)`,
            icon_url: client.settings.icon,
          },
          timestamp: new Date(),
          footer: {
            text: `${(interaction.type == 2) ? interaction.user.username : interaction.author.username} tarafından istendi.`,
            icon_url: (interaction.type == 2) ? interaction.user.displayAvatarURL() : interaction.author.displayAvatarURL(),
          },
        }
      ],
      components: [
        {
          data: { type: 1 }, components: [
            voteButon
          ]
        },
      ]
    });

  }
};