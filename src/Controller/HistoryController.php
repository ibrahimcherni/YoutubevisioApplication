<?php

namespace App\Controller;

use function MongoDB\BSON\toJSON;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Entity\History;



class HistoryController extends Controller
{


    /**
     * @Route("/api/addHistory", name="history",methods="POST")
     */

    public function addHistory(Request $request)
    {
        $data = json_decode(
            $request->getContent(), true
        ); // code in json to add history from angular

        $entityManager = $this->getDoctrine()->getManager();
        $history = new History();
        $history->setUrl($data['url']);
        $entityManager->persist($history);
        $entityManager->flush();
        $response = new JsonResponse();
        $response->setData(array('url' => $history->getUrl()));


        return $response;
    }

    /**
     * @Route("/api/history", name="history_show",methods="GET")
     */
    public function findAll()
    {
        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());

        $serializer = new Serializer($normalizers, $encoders);
        $repository = $this->getDoctrine()->getRepository(History::class);
        $response = new Response();
        $jsonContent = $serializer->serialize($repository->findAll(), 'json');
        $response->setContent(json_encode($jsonContent));
        $response->headers->set('Content-Type', 'application/json');

        return $response;

    }



}


