import { MigrationInterface, QueryRunner } from "typeorm";

export class MockPost1622639216427 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into post (title, body, "creatorId", "createdAt") values ('First Internet Bancorp', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-08-09T14:02:09Z');
insert into post (title, body, "creatorId", "createdAt") values ('Northwest Natural Gas Company', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-07-30T22:52:19Z');
insert into post (title, body, "creatorId", "createdAt") values ('Celyad SA', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2021-05-08T21:58:10Z');
insert into post (title, body, "creatorId", "createdAt") values ('Karyopharm Therapeutics Inc.', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-12-20T22:51:52Z');
insert into post (title, body, "creatorId", "createdAt") values ('Targa Resources, Inc.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2021-06-01T16:56:30Z');
insert into post (title, body, "creatorId", "createdAt") values ('Eiger BioPharmaceuticals, Inc.', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2021-01-19T00:46:58Z');
insert into post (title, body, "creatorId", "createdAt") values ('ClearBridge Large Cap Growth ESG ETF', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2020-07-19T03:12:46Z');
insert into post (title, body, "creatorId", "createdAt") values ('PNC Financial Services Group, Inc. (The)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2021-04-16T20:51:57Z');
insert into post (title, body, "creatorId", "createdAt") values ('Pitney Bowes Inc.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-06-17T01:37:14Z');
insert into post (title, body, "creatorId", "createdAt") values ('Benchmark Electronics, Inc.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2021-03-03T16:16:50Z');
insert into post (title, body, "creatorId", "createdAt") values ('JMP Group LLC', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2021-04-13T14:18:05Z');
insert into post (title, body, "creatorId", "createdAt") values ('Swiss Helvetia Fund, Inc. (The)', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2021-05-08T04:11:01Z');
insert into post (title, body, "creatorId", "createdAt") values ('ING Group, N.V.', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-08-20T21:11:08Z');
insert into post (title, body, "creatorId", "createdAt") values ('Smith Micro Software, Inc.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2021-01-21T03:50:08Z');
insert into post (title, body, "creatorId", "createdAt") values ('Fidus Investment Corporation', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-08-07T13:34:59Z');
insert into post (title, body, "creatorId", "createdAt") values ('M&T Bank Corporation', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2021-01-12T11:46:56Z');
insert into post (title, body, "creatorId", "createdAt") values ('The Priceline Group Inc. ', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2021-04-25T01:48:54Z');
insert into post (title, body, "creatorId", "createdAt") values ('Eleven Biotherapeutics, Inc.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2021-05-30T23:02:02Z');
insert into post (title, body, "creatorId", "createdAt") values ('Tuttle Tactical Management Multi-Strategy Income ETF', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-11-10T18:36:31Z');
insert into post (title, body, "creatorId", "createdAt") values ('Arch Capital Group Ltd.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2020-07-17T06:39:28Z');
insert into post (title, body, "creatorId", "createdAt") values ('Kilroy Realty Corporation', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2021-05-18T16:58:11Z');
insert into post (title, body, "creatorId", "createdAt") values ('Sealed Air Corporation', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-11-13T00:52:18Z');
insert into post (title, body, "creatorId", "createdAt") values ('MaxPoint Interactive, Inc.', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2021-03-01T02:49:18Z');
insert into post (title, body, "creatorId", "createdAt") values ('Red Rock Resorts, Inc.', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2021-01-21T18:47:37Z');
insert into post (title, body, "creatorId", "createdAt") values ('Advaxis, Inc.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-10-22T13:25:50Z');
insert into post (title, body, "creatorId", "createdAt") values ('New York Mortgage Trust, Inc.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2021-04-18T02:54:10Z');
insert into post (title, body, "creatorId", "createdAt") values ('Myers Industries, Inc.', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-11-06T05:49:33Z');
insert into post (title, body, "creatorId", "createdAt") values ('Kroger Company (The)', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-03-13T22:06:24Z');
insert into post (title, body, "creatorId", "createdAt") values ('Brookfield Real Assets Income Fund Inc.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2021-01-27T09:34:00Z');
insert into post (title, body, "creatorId", "createdAt") values ('Colonial Intermediate High Income Fund', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-11-25T15:17:50Z');
insert into post (title, body, "creatorId", "createdAt") values ('Syntel, Inc.', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-01-06T16:51:54Z');
insert into post (title, body, "creatorId", "createdAt") values ('KKR & Co. L.P.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2020-09-17T09:38:10Z');
insert into post (title, body, "creatorId", "createdAt") values ('Hemisphere Media Group, Inc.', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2021-05-18T23:09:51Z');
insert into post (title, body, "creatorId", "createdAt") values ('Sound Financial Bancorp, Inc.', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2021-05-31T02:08:37Z');
insert into post (title, body, "creatorId", "createdAt") values ('DTE Energy Company', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-09-26T11:09:56Z');
insert into post (title, body, "creatorId", "createdAt") values ('MINDBODY, Inc.', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2021-03-11T21:26:54Z');
insert into post (title, body, "creatorId", "createdAt") values ('Rogers Corporation', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2021-04-10T02:46:43Z');
insert into post (title, body, "creatorId", "createdAt") values ('Watts Water Technologies, Inc.', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2021-04-16T05:28:46Z');
insert into post (title, body, "creatorId", "createdAt") values ('Retail Properties of America, Inc.', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-02-17T10:58:52Z');
insert into post (title, body, "creatorId", "createdAt") values ('Achaogen, Inc.', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2021-04-16T04:55:48Z');
insert into post (title, body, "creatorId", "createdAt") values ('American International Group, Inc.', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2021-05-16T00:25:40Z');
insert into post (title, body, "creatorId", "createdAt") values ('Five Oaks Investment Corp.', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2021-04-20T09:32:08Z');
insert into post (title, body, "creatorId", "createdAt") values ('BofI Holding, Inc.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2020-08-20T10:57:57Z');
insert into post (title, body, "creatorId", "createdAt") values ('Western Asset High Income Fund II Inc.', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2021-03-08T11:34:55Z');
insert into post (title, body, "creatorId", "createdAt") values ('Portland General Electric Company', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-08-10T02:47:50Z');
insert into post (title, body, "creatorId", "createdAt") values ('Hudson Pacific Properties, Inc.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2021-03-15T23:55:50Z');
insert into post (title, body, "creatorId", "createdAt") values ('Catalyst Pharmaceuticals, Inc.', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2021-04-23T00:15:32Z');
insert into post (title, body, "creatorId", "createdAt") values ('Community Trust Bancorp, Inc.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-09-02T10:39:31Z');
insert into post (title, body, "creatorId", "createdAt") values ('Datawatch Corporation', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-10-12T15:10:57Z');
insert into post (title, body, "creatorId", "createdAt") values ('CSI Compressco LP', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-08-17T10:16:53Z');
insert into post (title, body, "creatorId", "createdAt") values ('First Trust Japan AlphaDEX Fund', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2021-01-21T11:34:18Z');
insert into post (title, body, "creatorId", "createdAt") values ('Gerdau S.A.', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2021-05-04T02:30:38Z');
insert into post (title, body, "creatorId", "createdAt") values ('Access National Corporation', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2021-01-18T01:45:37Z');
insert into post (title, body, "creatorId", "createdAt") values ('ENDRA Life Sciences Inc.', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2021-01-12T09:45:41Z');
insert into post (title, body, "creatorId", "createdAt") values ('American Woodmark Corporation', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2021-05-03T03:28:24Z');
insert into post (title, body, "creatorId", "createdAt") values ('Transdigm Group Incorporated', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2021-01-19T05:13:54Z');
insert into post (title, body, "creatorId", "createdAt") values ('Pure Cycle Corporation', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2021-05-08T18:52:54Z');
insert into post (title, body, "creatorId", "createdAt") values ('DHI Group, Inc.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-02-22T23:27:17Z');
insert into post (title, body, "creatorId", "createdAt") values ('Rayonier Inc.', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-11-18T09:01:01Z');
insert into post (title, body, "creatorId", "createdAt") values ('Texas Roadhouse, Inc.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2021-05-09T08:20:45Z');
insert into post (title, body, "creatorId", "createdAt") values ('FlexShopper, Inc.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-09-22T21:12:54Z');
insert into post (title, body, "creatorId", "createdAt") values ('Valero Energy Corporation', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-12-08T15:26:46Z');
insert into post (title, body, "creatorId", "createdAt") values ('Western New England Bancorp, Inc.', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2021-02-13T18:40:47Z');
insert into post (title, body, "creatorId", "createdAt") values ('Heska Corporation', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2020-06-27T21:58:33Z');
insert into post (title, body, "creatorId", "createdAt") values ('GNC Holdings, Inc.', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-03-14T07:39:32Z');
insert into post (title, body, "creatorId", "createdAt") values ('RH', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2021-05-12T11:21:47Z');
insert into post (title, body, "creatorId", "createdAt") values ('MCBC Holdings, Inc.', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-12-02T02:40:52Z');
insert into post (title, body, "creatorId", "createdAt") values ('Gamco Investors, Inc.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-05-27T06:40:55Z');
insert into post (title, body, "creatorId", "createdAt") values ('AZZ Inc.', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-06-07T20:26:28Z');
insert into post (title, body, "creatorId", "createdAt") values ('Galectin Therapeutics Inc.', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-01-19T09:16:24Z');
insert into post (title, body, "creatorId", "createdAt") values ('Tsakos Energy Navigation Ltd', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-09-29T03:29:56Z');
insert into post (title, body, "creatorId", "createdAt") values ('Public Storage', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-11-11T15:48:18Z');
insert into post (title, body, "creatorId", "createdAt") values ('Alliqua BioMedical, Inc.', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-10-04T04:13:40Z');
insert into post (title, body, "creatorId", "createdAt") values ('Orrstown Financial Services Inc', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2021-02-17T00:10:08Z');
insert into post (title, body, "creatorId", "createdAt") values ('Aerojet Rocketdyne Holdings, Inc. ', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-08-16T10:28:08Z');
insert into post (title, body, "creatorId", "createdAt") values ('Janus Henderson Group plc', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-10-15T07:11:29Z');
insert into post (title, body, "creatorId", "createdAt") values ('X-Links Gold Shares Covered Call ETN', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-09-19T20:41:48Z');
insert into post (title, body, "creatorId", "createdAt") values ('Zix Corporation', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2020-06-18T18:57:25Z');
insert into post (title, body, "creatorId", "createdAt") values ('CDK Global, Inc.', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2021-04-22T15:22:28Z');
insert into post (title, body, "creatorId", "createdAt") values ('Westrock Company', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2021-05-21T14:38:00Z');
insert into post (title, body, "creatorId", "createdAt") values ('Insulet Corporation', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-12-31T20:48:53Z');
insert into post (title, body, "creatorId", "createdAt") values ('Amplify Snack Brands, inc.', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2020-10-15T00:55:37Z');
insert into post (title, body, "creatorId", "createdAt") values ('Diversified Real Asset Income Fund', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-10-23T16:38:09Z');
insert into post (title, body, "creatorId", "createdAt") values ('Mannatech, Incorporated', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2021-05-15T22:33:37Z');
insert into post (title, body, "creatorId", "createdAt") values ('Alliance World Dollar Government Fund II', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-08-17T17:00:21Z');
insert into post (title, body, "creatorId", "createdAt") values ('Varonis Systems, Inc.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-02-05T19:04:10Z');
insert into post (title, body, "creatorId", "createdAt") values ('Oi S.A.', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2021-01-09T21:21:21Z');
insert into post (title, body, "creatorId", "createdAt") values ('Washington Prime Group Inc.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-01-21T01:53:28Z');
insert into post (title, body, "creatorId", "createdAt") values ('Great Lakes Dredge & Dock Corporation', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2020-07-18T06:14:47Z');
insert into post (title, body, "creatorId", "createdAt") values ('Genworth Financial Inc', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2021-04-30T08:44:29Z');
insert into post (title, body, "creatorId", "createdAt") values ('Atento S.A.', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-07-25T06:35:37Z');
insert into post (title, body, "creatorId", "createdAt") values ('Trimble Inc.', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2021-02-22T12:35:57Z');
insert into post (title, body, "creatorId", "createdAt") values ('Interpublic Group of Companies, Inc. (The)', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2021-05-26T13:34:37Z');
insert into post (title, body, "creatorId", "createdAt") values ('Catalyst Pharmaceuticals, Inc.', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2020-12-23T21:48:55Z');
insert into post (title, body, "creatorId", "createdAt") values ('Stanley Furniture Company, Inc.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-06-18T16:52:07Z');
insert into post (title, body, "creatorId", "createdAt") values ('Eagle Pharmaceuticals, Inc.', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2021-01-29T18:43:28Z');
insert into post (title, body, "creatorId", "createdAt") values ('Western Asset Municipal Partners Fund, Inc.', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-07-18T18:58:13Z');
insert into post (title, body, "creatorId", "createdAt") values ('National Fuel Gas Company', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-07-12T10:39:56Z');
insert into post (title, body, "creatorId", "createdAt") values ('Amarin Corporation plc', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-09-02T15:16:57Z');
insert into post (title, body, "creatorId", "createdAt") values ('Scholastic Corporation', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-10-13T21:08:38Z');`);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
