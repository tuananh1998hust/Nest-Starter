import { Injectable, Body, Param } from '@nestjs/common';
import { Item } from './interface/item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  private items: Item[] = [
    {
      id: '0',
      name: 'name 0',
      description: 'desc 0',
      qty: 0,
    },
    {
      id: '1',
      name: 'name 1',
      description: 'desc 1',
      qty: 1,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }

  create(@Body() createItemDto: CreateItemDto): Item {
    const newItem: Item = {
      id: `${this.items.length}`,
      ...createItemDto,
    };

    this.items.push(newItem);

    return newItem;
  }

  delete(id: string): string {
    this.items = this.items.filter(item => item.id !== id);

    return 'delete success';
  }

  update(updateItemDto: CreateItemDto, id: string): Item {
    const item: Item = this.findOne(id);

    item.name = updateItemDto.name;
    item.description = updateItemDto.description;
    item.qty = updateItemDto.qty;

    return item;
  }
}
