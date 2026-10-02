import type { ContactMessage } from '@/domain/entities'
import type { ContactRepository } from '@/domain/repositories/ContactRepository'
import type { HttpClient } from '@/infrastructure/http/HttpClient'

export class ApiContactRepository implements ContactRepository {
  private readonly http: HttpClient

  constructor(http: HttpClient) {
    this.http = http
  }

  async send(message: ContactMessage): Promise<void> {
    await this.http.post('/api/contact', message)
  }
}
