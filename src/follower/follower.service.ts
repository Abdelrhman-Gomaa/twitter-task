import { Inject, Injectable } from '@nestjs/common';
import { CreateFollowerInput } from './dto/create-follower.input';
import { Follower } from './entities/follower.entity';

@Injectable()
export class FollowerService {
constructor(
  @Inject('FOLLOWERS_REPOSITORY')
  private readonly followersRepository: typeof Follower
){}

  async create(createFollowerInput: CreateFollowerInput) {
    return await this.followersRepository.create({...createFollowerInput});
  }

  async findAll() {
    return await this.followersRepository.findAll( );
  }

  async findFollower(userId: number) {
    return await this.followersRepository.findAll({where:{followers_Id:userId}})
  }

  async findFollowing(userId: number) {
    return await this.followersRepository.findAll({where:{following_Id:userId}})
  }

  async findstatus(userId: number) {
    return await this.followersRepository.findAll({where:{id:userId}})
  }

  async findstatusbystring(status: string) {
    return await this.followersRepository.findAll({where:{status: status}})
  }

  /*findOne(id: number) {
    return `This action returns a #${id} follower`;
  }

  update(id: number, updateFollowerInput: UpdateFollowerInput) {
    return `This action updates a #${id} follower`;
  }

  remove(id: number) {
    return `This action removes a #${id} follower`;
  }*/
}
