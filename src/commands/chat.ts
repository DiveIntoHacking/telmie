import {Command, Flags} from '@oclif/core'

export default class Chat extends Command {
  static description = 'You can ask ChatGPT about anything with this cli command.'

  static examples = [
    `<%= config.bin %> <%= command.id %> "something to ask"`,
  ]

  static flags = {}

  static args = [{name: 'message', description: 'description that you want to ask ChatGPT', required: true}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Chat)
    const message = args.message
  }
}
