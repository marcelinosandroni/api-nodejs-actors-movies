import {Knex} from 'knex'
import {connection} from '../database/connection'
const log = connection('log')

export interface Model {
  db: () => Knex.QueryBuilder
  findAll: (props: unknown) => Promise<Record<string, any>>
  findOne: (props: Record<string, unknown>) => Promise<void>
  save: (props: Record<string, unknown>) => Promise<void>
  delete: (id: string) => Promise<number>
  update: (props: Record<string, unknown>) => Promise<number>
  detail: (props: unknown) => Promise<void>
  errorDb: (e: Error) => void
}

export abstract class BaseModel implements Model {
  db!: () => Knex.QueryBuilder

  constructor(table: string) {
    this.init(table)
  }

  abstract findAll(props: unknown): Promise<Record<string, any>>
  abstract findOne(props: Record<string, unknown>): Promise<void>
  abstract save(props: Record<string, unknown>): Promise<void>
  abstract delete(id: string): Promise<number>
  abstract update(props: Record<string, unknown>): Promise<number>
  abstract detail(props: unknown): Promise<void>

  async init(table: string) {
    try {
      console.log(`starting table ${table}`)
      this.db = () => connection(table)
    } catch (e) {
      this.errorDb(e)
    }
  }

  errorDb(e: Error) {
    console.log('fodeu', e)
    console.error(e.message)
    const errorData = {
      ...e,
      time: new Date()
    }
  }
}
