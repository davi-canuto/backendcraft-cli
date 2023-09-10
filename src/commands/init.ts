import constructYaml from '../helpers/construct-yaml'
import { Command, Flags } from '@oclif/core'
import select from '@inquirer/select'
import { exec } from 'node:child_process'
import * as fs from 'node:fs'
export default class Init extends Command {
  static description = 'Init YML form to create portifolio.'

  static flags = {
    code: Flags.boolean({
      description: 'Open YAML file with Visual Studio Code',
      required: false,
    }),
  }

  async run(): Promise<void> {
    const withExamples = await select({
      message: 'Init YAML file with examples?',
      choices: [
        {
          name: 'Yes',
          value: true,
        },
        {
          name: 'No',
          value: false,
        },
      ],
    })

    const yamlData = constructYaml(withExamples)

    const { flags } = await this.parse(Init)

    fs.writeFileSync('./index.yml', yamlData, 'utf8')

    if (flags.code) {
      exec('code ./index.yml', (error) => {
        if (error) {
          this.log(
            'Error in open with code, Your yml is it`s at your ./index.yml.',
          )
        }
      })
    } else {
      this.log('Your yml is it`s at your ./index.yml.')
    }
  }
}