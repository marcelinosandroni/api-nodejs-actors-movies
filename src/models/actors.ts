import {connection} from '../database/connection'
import {BaseModel} from './base'

enum Gender {
  Male = 'male',
  Female = 'female'
}

export interface Actor {
  id: string
  name: string
  salary: number
  birthDate: string
  gender: Gender
}

export class Actors extends BaseModel {
  constructor(table: string = 'actors') {
    super(table)
  }

  async findAll(props: unknown): Promise<Record<string, any>> {
    return this.db().select()
  }

  async findOne(props: Record<string, unknown>): Promise<void> {
    return this.db().select().where(props)
  }

  async save(props: Record<string, unknown>): Promise<void> {
    return this.db().insert(props)
  }

  async delete(id: Actor['id']): Promise<number> {
    return this.db().delete().where({id})
  }

  async update(props: Record<string, unknown>): Promise<number> {
    const {id, name, salary, birthDate: birth_date, gender} = props
    const data = {name, salary, birth_date, gender}
    return this.db().update(data).where({id})
  }

  async detail(props: unknown) {
    const [r] = await connection.raw('describe actors')
    return r
  }
}
