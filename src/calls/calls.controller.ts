import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
@Controller('calls')
export class CallsController {
 
    @Get()
    get(@Res() res: Response) {
      res.sendFile('simple-0.20.0.html', {
        root: './src/views',
      });
    }
    // @Get('all')
    // getAllOrder() {
    //     return "this.orderService.getAllOrder(";
    // }
}


