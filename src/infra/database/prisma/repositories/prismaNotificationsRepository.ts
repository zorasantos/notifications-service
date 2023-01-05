import { Notification } from 'src/application/entities/Notification/notification';
import { ANotificationRepository } from '../../../../application/repositories/ANotificationsRepository';
import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNotificationsRepository implements ANotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}