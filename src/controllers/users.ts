import { Request, Response } from 'express';
import User from '../models/user'

const createUser = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  if(user!=undefined){
    res.status(200).json({status: 'Success', user: user});
  }else{
    res.status(422).json({status: 'failure', message: 'Unable to create'});
  }
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.find({_id: id});
  if(user!=undefined){
    res.status(200).json({status: 'Success', user: user});
  }else{
    res.status(422).json({status: 'failure', message: 'Unable to find'});
  }
};

const getUsers = async (req: Request, res: Response) => {
  const users = await User.find({});
  if(users!=undefined){
    res.status(200).json({status: 'Success', users: users});
  }else{
    res.status(422).json({status: 'failure', message: 'Unable to find'});
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.find({_id: id});
  if(user != undefined){
    const updateUser = await User.updateOne({_id: id}, req.body);
    res.status(200).json({status: 'Success', message: 'Update Success', user: updateUser});
  }else{
    res.status(200).json({status: 'Failed', message: 'Update Failed'})
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.find({_id: id});
  if(user != undefined){
    await User.deleteOne({_id: id});
    res.status(200).json({status: 'Success', message: 'Delete Success'});
  }else{
    res.status(200).json({status: 'Failed', message: 'Delete Failed'})
  }
};


export default { createUser, getUser, getUsers, updateUser, deleteUser };